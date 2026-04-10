import posts from "./assets/posts.json";

function Blog() {
    // Want to check for frack - you can use filter (can even make one line)
    /* I prefer this case but....
    const cleanPosts = posts.filter(post =>
        !post.text.toLowerCase().includes("frack")
    );

    const listPosts = cleanPosts.map(post =>
        <>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
        </>
    )
     */
    const listPosts = posts.filter(post => !post.text.toLowerCase().includes("frack"))
        .map(post =>
        <>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
        </>
    )
    return (<>{listPosts}</>)
}

/*
The fun version with just passing 2 variables & function

function CheckLanguage({post}) {
    if (post.toLowerCase().includes("frack")) {
        return <p>Bad Word</p>
    } else {
        return <p>{post.title}</p>
    }
}

function Blog() {
    console.log(posts)
    // Better way - functions are first class
    return (
        <div className="blog">
            <h1>{props.title}</h1>
            <CheckLanguage post={props.text} />
        </div>
    )
}
 */

/*
function Blog(props) {
    console.log(props)
    // Worse way is to setup a variable (memory waste & not immutable)
    // Use State and this will crash stuff (cause way too many re-renders)
    let text = "";

    if (!props.text.toLowerCase().includes('frack')) {
        text = props.text;
    } else {
        text = "Bad Word!";
    }
    return (
        <div className="blog">
            <h1>{props.title}</h1>
            <p>{text}</p>
        </div>
    )
}
*/
export default Blog