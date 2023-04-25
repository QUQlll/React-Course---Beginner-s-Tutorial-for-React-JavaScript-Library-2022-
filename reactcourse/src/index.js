import React from 'react'
import ReactDOM from 'react-dom'



function Header() {
    return (
        <header>
           <nav className='nav'>
                <img alt='img' src='./logo192.png' className='nav-logo'></img>
            </nav>
            <ul className='nav-items'>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
     )
    
}

function Footer() {
    return (
        <footer>
        <small>2023 Ziroll development. All rights reserved.</small>
    </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons i'm excited to learn React</h1>
            <ol>
            <li>It's a popular library, so I'll be able to fit in with the coll kids</li>
            <li>I'm more likely to get a job as a develope if i konw React</li>
            </ol>
       </div> 
    )
}

function Page() {
    return (
        <div>    
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}


ReactDOM.render(<Page />, document.getElementById('root'))