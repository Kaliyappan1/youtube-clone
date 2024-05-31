import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';

function connect() {
    return (
        <>
   
        <div className='app_page'>

        <Sidebar/>
        <RecommendedVideos/>
        </div>

        </>
    )
}


export default connect;