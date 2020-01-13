import React from "react";
import ReactDOM from "react-dom";
import { renderToString } from "react-dom/server";

class Customizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fill: "#fe6f5e",
            color: "#ffffff",
            repository: "octocat/hello-world",
            dark: false,
        };

        this.setDark = this.setDark.bind(this);
        this.setColor = this.setColor.bind(this);
        this.setFill = this.setFill.bind(this);
        this.setRepo = this.setRepo.bind(this);
    }

    setDark(e) {
        this.setState({ dark: e.target.checked });
    }

    setColor(e) {
        this.setState({ color: e.target.value });
    }

    setFill(e) {
        this.setState({ fill: e.target.value });
    }

    setRepo(e) {
        this.setState({ repository: e.target.value });
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <div className="input-group">
                        <input
                            name="darkPreview"
                            type="checkbox"
                            onChange={this.setDark}
                        />
                        <label htmlFor="darkPreview">Dark Preview</label>
                    </div>

                    <div className="input-group">
                        <input
                            name="color"
                            type="color"
                            onChange={this.setColor}
                            defaultValue={this.state.color}
                        />
                        <label htmlFor="color">Octocat Color</label>
                    </div>

                    <div className="input-group">
                        <input
                            name="fill"
                            type="color"
                            onChange={this.setFill}
                            defaultValue={this.state.fill}
                        />
                        <label htmlFor="fill">Fill Color</label>
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <label htmlFor="repository">GitHub Repository</label>
                        <input
                            name="repository"
                            type="text"
                            onInput={this.setRepo}
                            defaultValue={this.state.repository}
                        />
                    </div>
                </div>

                <div className="version">
                    <div
                        className={
                            this.state.dark
                                ? `demo version-section dark`
                                : `demo version-section`
                        }
                    >
                        <RightCorner
                            fill={this.state.fill}
                            color={this.state.color}
                            repo={this.state.repository}
                        />
                    </div>
                    <div className="code version-section">
                        <pre>
                            {renderToString(
                                <RightCorner
                                    fill={this.state.fill}
                                    color={this.state.color}
                                    repo={this.state.repository}
                                />
                            )}
                            {renderToString(
                                <style
                                    dangerouslySetInnerHTML={{
                                        __html: `.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}`,
                                    }}
                                />
                            )}
                        </pre>
                    </div>
                </div>
                <div className="version">
                    <div
                        className={
                            this.state.dark
                                ? `demo version-section dark`
                                : `demo version-section`
                        }
                    >
                        <LeftCorner
                            fill={this.state.fill}
                            color={this.state.color}
                            repo={this.state.repository}
                        />
                    </div>
                    <div className="code version-section">
                        <pre>
                            {renderToString(
                                <LeftCorner
                                    fill={this.state.fill}
                                    color={this.state.color}
                                    repo={this.state.repository}
                                />
                            )}
                            {renderToString(
                                <style
                                    dangerouslySetInnerHTML={{
                                        __html: `.github-corner:hover .octo-arm{animation: octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0 %,100%{transform: rotate(0)}20%,60%{transform: rotate(-25deg)}40%,80%{transform: rotate(10deg)}}@media (max-width:500px){.github - corner: hover .octo-arm{animation: none}.github-corner .octo-arm{animation: octocat-wave 560ms ease-in-out}}`,
                                    }}
                                />
                            )}
                        </pre>
                    </div>
                </div>
            </div>
        );
    }
}

class LeftCorner extends React.Component {
    render() {
        return (
            <a
                href={`https://github.com/` + this.props.repo}
                className="github-corner"
            >
                <svg
                    width="80"
                    height="80"
                    viewBox="0 0 250 250"
                    style={{
                        fill: this.props.fill,
                        color: this.props.color,
                        position: "absolute",
                        top: 0,
                        border: 0,
                        left: 0,
                        transform: "scale(-1, 1)",
                    }}
                >
                    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
                    <path
                        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                        fill="currentColor"
                        style={{ transformOrigin: "130px 106px" }}
                        class="octo-arm"
                    />
                    <path
                        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                        fill="currentColor"
                        class="octo-body"
                    />
                </svg>
            </a>
        );
    }
}

class RightCorner extends React.Component {
    render() {
        return (
            <a
                href={`https://github.com/` + this.props.repo}
                className="github-corner"
                ariaLabel="View source on GitHub"
            >
                <svg
                    width="80"
                    height="80"
                    viewBox="0 0 250 250"
                    style={{
                        fill: this.props.fill,
                        color: this.props.color,
                        position: "absolute",
                        top: 0,
                        border: 0,
                        right: 0,
                    }}
                    aria-hidden="true"
                >
                    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
                    <path
                        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                        fill="currentColor"
                        style={{ transformOrigin: "130px 106px" }}
                        class="octo-arm"
                    />
                    <path
                        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                        fill="currentColor"
                        class="octo-body"
                    />
                </svg>
            </a>
        );
    }
}

ReactDOM.render(
    <Customizer />,
    document.getElementById("customizer-root"),
    null
);
