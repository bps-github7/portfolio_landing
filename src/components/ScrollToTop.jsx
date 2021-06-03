import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

/*

Credit given to stackoverflow user zurfyx for this solution
  which ensures browser isnt scrolled half way down page when
  we change routes (not sure why this behaivor isnt default with react router?)
post: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
*/

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return (null);
}

export default withRouter(ScrollToTop);