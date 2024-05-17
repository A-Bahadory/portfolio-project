import "./F.css";
import { Icon } from "@iconify/react";
export default function Frontend() {
  return (
    <div className="body">
      <h1>Frontend</h1>
      <div className="container">
        <div className="card">
          <div className="pokmon-image">
            <img
              src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5928299/og_image/optimized/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Social-33a3a7c9b759fdaa22973906070f8065.png"
              alt=""
            />
          </div>
          <div className="content">
            <h2>Frontend</h2>
            <ul>
              <p>
                React <Icon icon="vscode-icons:file-type-reactjs" />
              </p>
              <p>
                JS <Icon icon="logos:nodejs-icon" />
              </p>
              <p>
                HTML
                <Icon icon="vscode-icons:file-type-htmlhint" />
              </p>
              <p>
                CSS <Icon icon="devicon:css3" />
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
