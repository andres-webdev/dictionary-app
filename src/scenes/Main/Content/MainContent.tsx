export default function MainContent(){
    return (
        <main>
            <section className="main__section-title">
                <div>
                    <h1>Keyword</h1>
                    <span>/ˈkiːbɔːd/</span>
                </div>
                <img src="./src/assets/images/icon-play.svg" alt="play-botton" />
            </section>
            <section className="main__section">
                <div>
                    <h3>noun</h3>
                    <figure>
                        <div className="separator"></div>
                    </figure>
                </div>
                <h4>Meaning</h4>
                <ul>
                    <li><span>(etc.) A set of keys used to operate a typewriter, computer etc.</span></li>
                    <li><span>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</span></li>
                    <li><span>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</span></li>
                </ul>

                <div className="main__section-synonyms">
                    <h4 className="title">Synonyms</h4>
                    <span>electronic keyboard</span>
                </div>
                
            </section>
            <section className="main__section">
                <div>
                    <h3>verb</h3>
                    <figure>
                        <div className="separator"></div>
                    </figure>
                </div>
                <h4>Meaning</h4>
                <ul>
                    <li><span>To type on a computer keyboard.</span></li>
                    <li className="main__section__list-item">“Keyboarding is the part of this job I hate the most.”</li>
                </ul>
                <figure>
                    <div className="separator"></div>
                </figure>
            </section>
            <section className="main__section-sources">
                <h5>Source</h5>
                <ul>
                    <li>
                        <span>https://en.wiktionary.org/wiki/keyboard</span>
                        <img src="./src/assets/images/icon-new-window.svg" alt="new-window" />
                    </li>
                </ul>
            </section>
        </main>
    )
}