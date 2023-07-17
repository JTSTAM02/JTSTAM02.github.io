import Link from "next/link";
import NavBar from "./NavBar";
import styles from "../../styles/globals.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function FirstPost() {
    return (
    <>
    <div className={styles.container}>
    <NavBar></NavBar>
    
        <div className="text-center">
        <div className="img-fluid" style={{maxWidth: '20px'}}>
        <img alt = "Me, my wife, and my puppy" src= 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/285069147_10210246318232141_7262627262845953222_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kRxwk6JD4sAAX_yDEGc&_nc_ht=scontent-ord5-2.xx&oh=00_AfA7yOSt8Pb20Dls3dTU4oCfHN2TAR-YJesH5uvF9E_oAw&oe=64B5E6BA' 
        width = {400}/>
        </div>
        <p className="p">
        Hello there! A little bit about me: I'm a full stack web developer with an interest in creating highly engaging, fun websites of all kinds. I enjoy working on projects during my free time, to create the very best products for the future. Outside of my work, I love spending time with my wife and family, playing or coaching basketball, or cheering on my hometown Louisville Cardinals.
        </p>

        <p>In my previous career, I taught history in the public school system. I deeply value education and its place in our society, but ultimately grew unhappy and wanted to seek a job in a career that utilized my skills and interests. I had always been fascinated with technology and the constant growth of the industry. I love learning new programming languages and gathering knowledge from sources like modern AI systems and online blogs.</p>

        <p>
        Want to connect? I am currently looking for new opportunities in software development. If you or your company is hiring-I'd love to know!
        </p>

        </div>
        <footer>
        <Link href='/'>Back to home page</Link>
    </footer>

    </div>
    </>
    )
}