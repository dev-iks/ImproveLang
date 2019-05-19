import React, {Component} from 'react';
import Header from "./Header";
import thinking_img from "../../assets/img/thinking-about-lang.jpg";

class Tips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    render() {
        return(

            <div>
                <Header />
                <header className="masthead">
                    <div className="container h-50">
                        <div className="row h-75">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto mt-5">
                                    <h1 className="mb-3">Tips</h1>
                                    <img src={thinking_img} className="img-fluid mb-3" alt="thinking..." />
                                    <div className="content">
                                        <p>
                                            You don’t need to live in an English-speaking country to become fluent in English. 
                                            If you are smart about the way you learn English, you don’t even need to leave your home town. 
                                            Use these 10 top tips for to improve your English without even leaving your city.
                                        </p>
                                        <ol className="list-group list-group-flush">
                                            <li className="list-group-item  no-bg">
                                                <h4>Surround yourself with English</h4>
                                                You don’t need to be in an English-speaking country to surround yourself with English.
                                                Find ways to make English part of your everyday life at home, like writing your shopping list, reading the newspaper, 
                                                listening to the radio, writing a diary in English, or listening to English on your cellphone while traveling to work.
                                            </li>
                                            <li className="list-group-item no-bg">
                                                <h4>Make English friends</h4>
                                                Even if you don’t live in an English-speaking country, there are probably many foreigners living nearby. Find ways to meet native English-speakers: going to foreign bars and restaurants, joining sport and social clubs, or arranging language exchanges. You could even volunteer as a guide at a local tourist attraction to meet English-speakers from all over the world.
                                            </li>
                                            <li className="list-group-item no-bg">
                                                <h4>Find study partners</h4>
                                                You don’t need native speakers to practice your English. Find a study partner, or form an English club 
                                                and meet regularly to speak English. You can motivate each other, and you will learn by helping others 
                                                with their problems.
                                            </li>
                                            <li className="list-group-item no-bg">
                                                <h4>Use authentic materials</h4>
                                                Just reading English in textbooks can get boring. Try reading English texts written for and by 
                                                native speakers. It will be a challenge at first but a lot more interesting once you can do it. 
                                                If you can’t find English books or magazines, use the Internet to read the news in English every day. 
                                                Why not take a look at the EF English Live free Engish resources and check your skills with our free English test, try fun quizzes, learn with our ebooks and more?
                                            </li>
                                            <li className="list-group-item no-bg">
                                                <h4>Get online</h4>
                                                Get online and you can be in contact with people from all over the world. Join chat rooms or forums, take an online English course, 
                                                or find a penpal to practice your English while learning about different cultures. With social media, it’s easier than ever to stay in touch 
                                                with friends from all over the world.
                                            </li>
                                            <li className="list-group-item no-bg">
                                                <h4>Set yourself realistic goals</h4>
                                                Give yourself a reason for studying: do you want to get a promotion, be able to talk to your foreign colleagues, study abroad, or spend your next holiday in an English-speaking country? Set short-term as well as long-term goals, and keep track of your progress.
                                            </li>
                                            <li className="list-group-item no-bg">
                                                <h4>Listen to real English</h4>
                                                Train your ear by listening to English spoken at normal speed, even if you don’t understand everything. Also practice listening without seeing things written down and don’t be afraid to listen to things several times to catch any interesting or unusual vocabulary in there. It’s easy to find free English podcasts online and news agencies from most English-speaking countries have audio and video news available for free online.
                                            </li>
                                            <li className="list-group-item no-bg">
                                                <h4>Find fun ways to learn new words</h4>
                                                If you like singing, then look up the words for your favorite English songs. Or if you remember what you see, write new words on ‘Post-it’ notes and stick them up around your house. Make funny example sentences or draw little pictures next to new vocabulary to help you remember it.
                                            </li>
                                            <li className="list-group-item no-bg">
                                                <h4>Learn about the culture</h4>
                                                Find out about the people and the culture of English-speaking countries. Learning a language is not just about grammar and vocabulary: 
                                                it’s about communicating with people who have different ways of thinking as well as speaking!
                                            </li>
                                            <li className="list-group-item no-bg">
                                                <h4>Whatever you do, have fun!</h4>
                                                Learning a language does take work, but you’ll be more likely to stick to it if you are enjoying yourself. 
                                                Play games, do crossword puzzles, sing songs, read comics, and don’t worry too much about making mistakes – making mistakes is often 
                                                the way to learn best!
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Tips;