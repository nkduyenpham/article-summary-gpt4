// import { logo } from "../assets";
import summa from "../assets/summa.svg"
const About = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 mt-5">
                <img src={summa} alt="sumz-logo" className="w-24 object-contain" />
                <button type="button" onClick={() => window.open('https://github.com/nkduyenpham')} className="black_btn">Github</button>
            </nav>
            <h1 className="head_text">
                Summarize Articles with <br className="max-md:hidden" />
                <span className="matcha_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Our website summary tool provides concise, accurate summaries of web content, saving you time by delivering key information quickly and efficiently. Perfect for research, news, and staying informed.
            </h2>
        </header>
    )
}

export default About;  