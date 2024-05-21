import "./F.css";
import { Icon } from "@iconify/react";
export default function Others() {
  return (
    <div className="body">
      <h1>Others</h1>
      <div className="container">
        <div className="card">
          <div className="pokmon-image">
            <img
              src="https://media.licdn.com/dms/image/C4D12AQHtD4wKZiCQjw/article-cover_image-shrink_720_1280/0/1635828360297?e=2147483647&v=beta&t=ahlrsevylAiWvPXENssrL_C3ATC78JbIumjtZ9S72gk"
              alt=""
            />
          </div>
          <div className="content">
            <ul>
              <p>Interpreter</p>
              <p>Culture Mediator</p>
              <p></p>
              <p>css</p>
              <p>JEST</p>
              <p>Vite</p>
            </ul>
            <ul>
              <div>
                <Icon icon="skill-icons:react-light" />
              </div>
              <div>
                <Icon icon="vscode-icons:file-type-js-official" />
              </div>
              <div>
                <Icon icon="ph:file-html-thin" />
              </div>
              <div>
                <Icon icon="vaadin:css" />
              </div>
              <div>
                <Icon icon="skill-icons:jest" />
              </div>
              <dir>
                <Icon icon="devicon:vitejs" />
              </dir>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
