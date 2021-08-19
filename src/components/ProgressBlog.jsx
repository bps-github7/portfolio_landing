import React, { useState, useEffect } from 'react';
import firebase from '../services/firebase';

const ProgressBlog = (props) => {
	const [ loading, setLoading ] = useState(false);
	const [ docs, setDocs ] = useState([]);	



	// TODO: would like to get this fn more reusable, why cant we use it in an effect hook?
	// currently it causes a warning about exhaustive dependencies.
	const ref = firebase.firestore().collection('progressBlog');	
	const getDocs = () => {
		setLoading(true);
		ref.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});
			setTimeout(() => {
				setLoading(false);
				setDocs(items);
			}, 700)
		});
	}

	useEffect(() => {
		getDocs();
	},[])

	if ( loading ) {
		return( <h1>Loading...</h1> );
	}


	//top level component for Progress reporting in the about section
	return(	
		<section>
			<h3>Progress blog</h3>
			<p>A place to report on my progress on breaking into the IT and software industry</p>

			{ 
				docs && docs.map((blogs, i) => (
					<BlogPost blog={blogs} key={i}/>
				)) 
			}
		</section>			
	)
}

// dumb component that constructs a blog post out of the object from firestore
const BlogPost = ({blog}) => {
	return(
	<section className="blog-post">
		<h3 className="heading">{blog.title}</h3>
		<h5 className="sub-heading">{blog.description}</h5>
		<h6 className="date sub-heading">{blog.datePosted}</h6>
		<hr />
		<p>
			{blog.body}
		</p>
		<h6> Post Details: </h6>
		{ blog.details ? <BlogDetails details={blog.details}/> : null}
		<p>{blog.conclusion}</p>
	</section>)
}

const BlogDetails = ({details}) => {
	return(
		<ul className="blog-details">
			{ details.map((item, i) => (
					<DetailsManager detail={item} key={i} />
					// <li key={i}>{item}</li>
				)
			) 
			}
		</ul>
	)
}


/* some detail typed components.
allow us to display different types of content within a blog post */
const LinkDetail = ({linkDetails}) => {
	const { linkText, url }  = linkDetails;
	return (
		<li className="blog details link">
			<a href={url}>
				{linkText}
			</a>
		</li>
		) 
}

const CodeblockDetail = ({codeblockDetails}) => {
	const { summary, code, language, comments } = codeblockDetails;
	return(
		<li className="blog details codeblock">
			{summary}
			<br />
			<span><strong>Language:</strong>{language}</span>
			<br />
			<pre>
				{ code }	
			</pre>
			{/* this is being really problematic. stretchesthe page past max width */}
			{/* { comments ?
				<pre>
					{ comments }
				</pre>
				: null
			} */}
		</li>
	)
}

const ImageTileDetail = ({imageDetails}) => {
	const {downloadUrl, altText, description} = imageDetails;
	return(
		<li className="blog details image">
			<img src={downloadUrl} alt={altText} />
			<label htmlFor="the above image">{description}</label>
		</li>
	)
}

const DetailsManager = ({detail}) => {
	// cant use switch here because there is no shared
	// property betweeen the different types of details

	//is there a better way to do this ? like angular content projection? { props }
	if(detail.linkText) {
		return(<LinkDetail linkDetails={detail}/>);
	}	else if (detail.downloadUrl) {
		return(<ImageTileDetail imageDetails={detail}/>)
	} else if (detail.code) {
		return(<CodeblockDetail codeblockDetails={detail}/>);
	} else {
		if (typeof(detail) === "string") {
			return(
				<li> {detail} </li>
			)
		} else {
			return (
				<li>Detail Manager wasnt sure what to render, so youre seeing this instead...</li>
			)
		}
		
	}
}
export default ProgressBlog;