// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  gh: require("../assets/github_prtsc.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  slack: require("../assets/slack_screenshot.png")
};

const demoVideo = require('file!../assets/livedemo.m4v');

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
            React
            </Heading>
            <Heading size={1} fit caps>
            A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
            </Heading>
            <Heading size={1} fit caps textColor="black">
            The V in MVC
            </Heading>
            <Link href="https://facebook.github.io/react/">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>One-way reactive data flow</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="white" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.slack.replace("/", "")} margin="0px auto 40px" height="600px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
            <br />
            <Code style={{color: 'white'}}>
            Hello Port 80
            </Code>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
              ES6 with Babel
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
              Hot Module Reloading
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
              Awesome Sauce
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Layout>
              <Fill>
                <Appear>
                  <div>
                    <Heading size={4} textColor="secondary" bgColor="white" margin={10}>
                    Stateless Functional Components
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw!../assets/helloworld_stateless.jsx.example")}
                      margin="20px auto"
                    />
                  </div>
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <div>
                    <Heading size={4} textColor="secondary" bgColor="white" margin={10}>
                    Babel
                    </Heading>
                    <CodePane
                      lang="jsx"
                      source={require("raw!../assets/.babelrc.example")}
                      margin="20px auto"
                    />
                  </div>
                </Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Doing it live</Heading>
            <p>
            (pre recorded demo of jumping out and editing slide show with all the things goes here)
            </p>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <video autoplay controls src={demoVideo} style={{height:'70vh'}}></video>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
            Data Binding
            </Heading>
            <Markdown>
              {`
              React is the just the view, to handle data-binding you should be using something else.

              Flux (a pattern with plenty of libraries) and Redux are two common ways of doing this.

              * ~~Isomorphic~~ Universal rendering
              * Uni-directional flow
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
            Active Community
            </Heading>
            <Image src={images.gh.replace("/", "")} margin="40px auto 40px" height="450px"/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Questions
            </Heading>
            <Link href="https://github.com/lukejohn/port80-react">Slides https://github.com/lukejohn/port80-react</Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
