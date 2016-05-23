// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
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

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  jeremy: require("../assets/jeremy-freeman.png"),
  kyle: require("../assets/kyle.jpg"),
  janelia: require("../assets/janelia.jpg"),
  group: require("../assets/group.png"),
  thunder: require("../assets/thunder.svg"),
  bolt: require("../assets/bolt.svg"),
  codeneuro: require("../assets/codeneuro.png"),
  github: require("../assets/github.png"),
  githubUsage: require("../assets/github_example.png"),
  requirements: require("../assets/requirements.png"),
  docker: require("../assets/docker.png"),
  spark: require("../assets/spark.png"),
  kubernetes: require("../assets/kubernetes.svg"),
  jupyter: require("../assets/jupyter.svg"),
  lightning: require("../assets/lightning.svg"),
  binder: require("../assets/binder.svg"),
  stage1: require("../assets/stage1.svg"),
  stage2: require("../assets/stage2.svg"),
  stage3: require("../assets/stage3.svg"),
  logo: require("../assets/binder-logo.png"),
  markdown: require("../assets/markdown.png"),
  kat: require("../assets/kat.png"),
  city: require("../assets/city.jpg"),
  sofroniewn: require("../assets/sofroniewn.png"),
  ligo: require("../assets/ligo.png"),
  textbook: require("../assets/textbook.png"),
  root: require("../assets/root.png"),
  dat: require("../assets/dat.png"),
  complex: require("../assets/complex.png"),
  nteract: require("../assets/nteract.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ffffff"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="none">

          <Slide transition={["zoom"]} bgColor="primary">
            <Image src={images.binder} margin="0px auto 40px" height="293px" />
            <Link href="https://github.com/binder-project/binder">
              <Text textSize="2em" textColor="secondary">github.com/binder-project/binder</Text>
            </Link>
            <Text textSize="1em" margin="20px 0px 0px" textColor="secondary">Andrew Osheroff</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Layout>
              <Fill>
                <Image src={images.jeremy} margin="0px auto 40px" height="293px"/>
              </Fill>
              <Fill>
                <Image src={images.janelia} margin="0px auto 40px" height="293px"/>
              </Fill>
            </Layout>
            <Text textSize="2em" textColor="secondary"> 
              The Freeman Lab 
            </Text>
            <Text textSize="2em" textColor="secondary"> 
              HHMI's Janelia Research Campus 
            </Text>
            <Link href="thefreemanlab.com">
              <Text textSize="1em" textColor="secondary">
                thefreemanlab.com
              </Text>
            </Link>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
              <Image src={images.group} margin="0px auto 40px" height="600px" />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
              <Layout>
                <Fill>
                  <Image src={images.thunder} margin="20px auto 40px" height="200px"/>
                </Fill>
                <Fill>
                  <Image src={images.lightning} margin="20px auto 40px" height="200px"/>
                </Fill>
                <Fill>
                  <Image src={images.bolt} margin="20px auto 40px" padding="40px 0px 0px 0px" height="220px"/>
                </Fill>
                <Fill>
                  <Image src={images.logo} margin="0px auto 40px" height="200px" />
                </Fill>
              </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" textColor="secondary">
              A little background...
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Layout>
              <Fill>
                <Image src={images.github} margin="0px auto 40px" padding="110px 100px 0px 0px" height="230px"/>
              </Fill>
              <Fill>
                <Image src={images.jupyter} margin="0px auto 40px" height="293px"/>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
             <Image src={images.githubUsage} margin="0px auto 40px" height="600px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Fill>
             <iframe src="http://nbviewer.jupyter.org/github/minrk/ligo-binder/blob/master/GW150914_tutorial.ipynb" width="1000px" height="700px" style={{display: 'block', border: 'none', overflow: 'hidden'}} />
            </Fill>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Text fontSize="2em">
              But the notebooks on GitHub are read-only!
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
             <Image src={images.kyle} margin="0px auto 40px" height="293px"/>
             <Link href="https://github.com/rgbkrk/tmpnb">
                <Text textSize="1em">github.com/rgbkrk/tmpnb</Text>
              </Link>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
             <Image src={images.docker} margin="0px auto 40px" height="293px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
             <Image src={images.codeneuro} margin="0px auto 40px" height="500px"/>
             <Link href="https://github.com/codeneuro/notebooks">
                <Text textSize="1em">github.com/codeneuro/notebooks</Text>
              </Link>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Text fontSize="2em">
              And again, and again...
            </Text>
            <Appear fid="1">
              <Text fontSize="2em" margin="100px">
                Already have GitHub, Jupyter, Docker...
              </Text>
            </Appear>
            <Appear fid="2">
              <Text fontSize="2em" margin="100px">
                Can it be made more general?
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.requirements} margin="0px auto 40px" height="600px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Fill>
             <iframe src="http://mybinder.org/" width="100%" height="700px" style={{display: 'block', border: 'none', overflow: 'hidden'}} />
            </Fill>
          </Slide>

          <Slide>
            <Text fontSize="2em">
             Demo
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="#555555">
            <Fill>
               <Image src={images.stage1} bgColor="#555555" margin="0px auto 40px" width="100%" height="320px"/>
            </Fill>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Text fontSize="2em" textColor="secondary">
              Many repositories contain standard dependency files:
            </Text>
             <List>
              <Appear><ListItem>requirements.txt</ListItem></Appear>
              <Appear><ListItem>environment.yml</ListItem></Appear>
              <Appear><ListItem>Or a custom Dockerfile</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/Dockerfile")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/environment.yml")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Text fontSize="1em" textColor="secondary" margin="0px auto 40px">
              The build stage just depends on these:
            </Text>
            <Layout>
              <Fill>
                <Image src={images.github} margin="0px auto 40px" height="120px"/>
              </Fill>
              <Fill>
                <Image src={images.jupyter} margin="0px auto 40px" height="150px"/>
              </Fill>
            </Layout>
            <Layout>
              <Fill>
                <Image src={images.docker} margin="0px auto 40px" height="150px"/>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Text textSize="2em" textColor="secondary">
              But the Docker image isn't quite enough.
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="#555555">
            <Fill>
               <Image src={images.stage2} bgColor="#555555" margin="0px auto 40px" width="100%" height="320px"/>
            </Fill>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.kubernetes} margin="0px auto 40px" height="150px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
             <Image src={images.spark} margin="0px auto 40px" height="600px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="#555555">
            <Fill>
               <Image src={images.stage3} bgColor="#555555" margin="0px auto 40px" width="100%" height="320px"/>
            </Fill>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Fill>
             <iframe src="http://docs.mybinder.org/" width="100%" height="700px" style={{display: 'block', border: 'none', overflow: 'hidden'}} />
            </Fill>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Text textSize="2em" textColor="secondary">
              Examples!
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Fill>
             <iframe src="http://mybinder.org/feed" width="100%" height="700px" scrolling="no" style={{display: 'block', border: 'none', overflow: 'hidden'}} />
            </Fill>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Link href="https://github.com/sofroniewn/tactile-coding">
              <Text textSize="2em" textColor="secondary">github.com/sofroniewn/tactile-coding</Text>
            </Link>
            <Image src={images.sofroniewn} margin="20px auto 40px" height="400px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Link href="https://github.com/cranmer/ligo-binder">
              <Text textSize="2em" textColor="secondary">github.com/cranmer/ligo-binder</Text>
            </Link>
            <Text textSize="1em" textColor="secondary">(also done by minrk)</Text>
            <Image src={images.ligo} margin="20px auto 40px" height="400px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Link href="https://github.com/cernphsft/rootbinder">
              <Text textSize="2em" textColor="secondary">github.com/cernphft/rootbinder</Text>
            </Link>
            <Image src={images.root} margin="20px auto 40px" height="400px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Link href="https://github.com/data-8/textbook">
              <Text textSize="2em" textColor="secondary">github.com/data-8/textbook</Text>
            </Link>
            <Image src={images.textbook} margin="20px auto 40px" height="400px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" textColor="secondary">Small FAQ</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Appear fid="1">
              <Text textSize="2em" textColor="secondary" margin="80px">Where's the $$$ come from?</Text>
            </Appear>
            <Appear fid="2">
              <Text textSize="2em" textColor="secondary">@thefreemanlab's lab budget</Text>
            </Appear>
            <Appear fid="3">
              <Text textSize="1em" textColor="secondary">(but it's a fairly small deployment)</Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Appear fid="1">
              <Text textSize="2em" textColor="secondary" margin="80px">Can I deploy the system myself?</Text>
            </Appear>
            <Appear fid="2">
              <Text textSize="2em" textColor="secondary">Definitely! Recent example...</Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Appear fid="1">
              <Text textSize="2em" textColor="secondary" margin="80px">What's the best way to access data?</Text>
            </Appear>
            <Appear fid="2">
              <Text textSize="2em" textColor="secondary">Can be tricky</Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Fill>
              <Image src={images.dat} margin="0px auto 40px" height="300px" />
            </Fill>
            <Link href="dat-data.com">
              <Text fontSize="2em">dat-data.com</Text>
            </Link>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Text textSize="2em" textColor="secondary">
              Future Directions
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Fill>
              <Image src={images.complex} margin="0px auto 40px" width="100%" height="650px" />
            </Fill>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Markdown fontSize="1em">{`\`jupyter nbconvert --to FORMAT\``}</Markdown> 
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Fill>
              <Image src={images.nteract} margin="0px auto 40px" height="300px" />
            </Fill>
            <Link href="nteract.github.io">
              <Text fontSize="2em">nteract.github.io</Text>
            </Link>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Appear fid="1">
              <Text textSize="2em" textColor="secondary" margin="40px">All MIT-licensed, open-source</Text> 
            </Appear>
            <Appear fid="2">
              <Link href="https://gitter.im/binder-project/binder">
                <Text textSize="2em" textColor="#0ebfe9">gitter.im/binder-project/binder</Text> 
              </Link>
            </Appear>
            <Appear fid="3">
              <Link href="https://github.com/binder-project/">
                <Text textSize="2em" textColor="#0ebfe9">github.com/binder-project</Text>
              </Link>
            </Appear>
            <Appear fid="4">
              <Text textSize="2.2em" textColor="#ff0000" margin="70px">Contributions extremely welcome!</Text> 
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="#0ebfe9">
            <Text textSize="2em" bold textColor="secondary" margin="0 0 100px 0">Thanks!</Text> 
            <Appear fid="1"><Text textSize="1.9em" textColor="secondary">- The Freeman Lab</Text></Appear>
            <Appear fid="2"><Text textSize="1.9em" textColor="secondary">- The HHMI and the Janelia Research Campus</Text></Appear>
            <Appear fid="3"><Text textSize="1.9em" textColor="secondary">- Contributors, bug reporters, and supporters</Text></Appear>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
