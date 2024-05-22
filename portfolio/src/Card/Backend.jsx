import "./card-component.css";
import { Icon } from "@iconify/react";
export default function Backend() {
  return (
    <div className="body">
      <h1>Backend</h1>
      <div className="container">
        <div className="card">
          <div className="pokmon-image">
            <img src="backend.webp" alt="" />
          </div>
          <div className="content">
            <ul>
              <p>Node(node.js)</p>
              <p>postgreSQL</p>
              <p>SQL</p>
              <p>git</p>
            </ul>
            <ul>
              <div>
                <Icon icon="logos:nodejs-icon" />
              </div>
              <div>
                <Icon icon="logos:postgresql" />
              </div>
              <div>
                <Icon icon="vscode-icons:file-type-sql" />
              </div>
              <div>
                <Icon icon="skill-icons:git" />{" "}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
