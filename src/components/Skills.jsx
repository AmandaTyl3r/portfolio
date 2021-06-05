import React from "react";

class Skills extends React.Component{

    render(){
        return(
            <section id="skills" className="skills section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Skills</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
              <div className="row skills-content">
              <div className="col-lg-4">
                      <h5>JavaScript</h5><p></p>
                      <h5>C#</h5><p></p>
                      <h5>CSS</h5>
                    </div>
                <div className="col-lg-4">
                    <h5>React.js</h5><p></p>
                      <h5>.NET Core</h5><p></p>
                      <h5>Git</h5><p></p>
                      <h5>AJAX</h5>
                    </div>
                    <div className="col-lg-4">
                    <h5>SQL</h5><p></p>
                    <h5>RESTful API</h5><p></p>
                      <h5>C#</h5><p></p>
                      <h5>HTML</h5>
                    </div>
                </div>
              </div>
           
          </section>
        );
    }
}

export default Skills;