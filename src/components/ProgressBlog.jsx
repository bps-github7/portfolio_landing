import React, { useState } from 'react';

const ProgressBlog = (props) => {
		//top level component for Progress reporting in the about section


	// hardcoding of our first couple blog posts
	const BlogPosts = [
		{ 
			title : "revamping efforts with portfolio landing",
			description : "Some changes I'd like to make moving forward",
			datePosted : "8/3/2021",
			body: "over the past year, I have been trying to break into the IT/software industry, with unfortunately few promising leads to report. I'll admit that my goal setting and execution have been less than ideal. The gist was this-		make a great portfolio, and hiring manager will take me seriously as a web developer or software engineer.		While I still believe this is a factor, Ive also come to realize that I need to set more concrete goals than this.		I still have many half finished portfolio projects, some big and some small, and even if I dedicated an inordinate amount		of time to finishing these, I'd still be working on  them in five years time. However, when I do get a job in the industry		I will still have these projects to work on. Therefore, it is germain to realize that my priorities must be adjusted in order		to increase the liklihood I will have a job in the next year which will help me to begin my career in IT",
		 details : ["improve this portfolio landing in general, and expand on this 'about- progress' page","document progress on IVDB and Python class generator",
		 "Post daily 'blogs' on approach, solution and discussion of daily coding interview questions",
		 "document progress towards obtaining industry certs such as Comptia A+, Security and Network + and Redhat Sys admin"],
		 conclusion : "The above mentioned steps are ambituious, but I plan to be strategic about them and clearly document my progress. 		 I believe that the most important of these is getting industry certification. While working on the portfolio is great, having a great		 portfolio is no gurantee that I will be seen as a competent candidate. I plan study for the next 4 months and then take the comptia a+ 200-901 in november and then the 902 in march.		 These are concrete goals which will set me on the path for attaining higher level certification. The coding interview problems will demonstrate		 my abilities as a general problem solver and a multi faceted web and general developer. The progress reports on my main repos (IVDB and class generator) will demonstrate that i am making marked progress on these projects, not only to other developers but also laypeople."
		},		
		{ 
			title : "Todays enhancements and general todos", 
			description : "synopsis of changes to be made to this site", 
			datePosted : "8/4/2021", 
			body: "Over the last month, I shared a link of this portfolio landing with a more experienced developer ive connected with on LinkedIn, and asked for feedback. His suggestions are what initially turned my attention back to working on this site. Im hoping that today, I can address some of the major issues, as well as sketch out some design concepts for this new blog section, and begin laying the infrastructure for connecting it to firebase. Doing so will allow more of the site content to be supplied dynamically, overall increasing the quality of organization with the code base, which is currently less than ideal. The following bullets will outline the todo items I've set out for myself today", 
			details : [{ linkText: "Designs done for blog", url : "https://github.com/bps-github7/portfolio_landing/issues/5" }, {linkText : "general todos/portfolio landing enhancements", url: "https://github.com/bps-github7/portfolio_landing/issues/4"}, "get the site hooked up to B.A.A.S (firebase)", "begin migrating content from json to firestore d.b"],
			conclusion : "see github issue (https://github.com/bps-github7/portfolio_landing/issues/4)  for a complete todo list of improvements and enhancements that need to be made in the future. Hoping to deal with some of the TODOs and firebase connectivity later on today. The wireframing/ design decisions can be found in this issue: https://github.com/bps-github7/portfolio_landing/issues/5"},
	]


	return(	
		<section>
			<h3>Progress blog</h3>
			<p>A place to report on my progress on breaking into the IT and software industry</p>

			{ BlogPosts.map((blogs, i) => (
				<BlogPost blog={blogs} key={i}/>
			)) }
		</section>			
	)
}

// dumb component that constructs a blog post out of the object from firestore
const BlogPost = ({blog}) => {
	return(
	<section className="blog-post">
		<h3 class="heading">{blog.title}</h3>
		<h5 class="sub-heading">{blog.description}</h5>
		<h6 class="date sub-heading">{blog.datePosted}</h6>
		<hr />
		<p>{blog.body}</p>
		<BlogDetails details={blog.details}/>
		<footer>Conclusion: {blog.conclusion}</footer>
	</section>)
}

const BlogDetails = ({details}) => {
	// need to expand on this- multiple types of Blog Details, use conditional rendering
	return(
		<ul className="blog-details">
			{ details.map((item, i) => (
					<DetailsManager detail={item} />
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
	const { summary, code, language } = codeblockDetails;
	return(
		<li className="blog details codeblock">
			{summary}
			<span><strong>Language:</strong>{language}</span>
			<pre>
				{ code }	
			</pre>		
		</li>
	)
}

const ImageTileDetail = ({imageDetails}) => {
	const {downloadUrl, altText, description} = imageDetails;
	return(
		<li className="blog details image">
			<img src={downloadUrl} alt={altText} />
			<label for="the above image">{description}</label>
		</li>
	)
}

const DetailsManager = ({detail}) => {
	// cant use switch here because there is no shared
	// property betweeen the different types of details
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