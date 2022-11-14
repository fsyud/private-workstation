import "./Newtab.css";
import * as React from 'react';
import { Component } from 'react';

class Memorandum extends Component {
  state = {
    items: [],
    text: "",
  }

  render() {
    this.useLocalStorage();

    return (
      <React.Fragment>
        <ul>
          {this.state.items.map(item => (
            <li onClick={() => this.handleDelItem(item)}>{item.text}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-memorandu"
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="What do you need to do?"
          ></input>
          <div className="button">
            <button className="btn btn-blue">Add</button>
            <button className="btn btn-red" onClick={this.handleClearItems}>Clear</button>
          </div>
          
        </form>
      </React.Fragment>
    )
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // 如果未输入任何内容，则不添加
    if (this.state.text.length === 0) {
      return;
    }

    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };

    this.setState({
      items: this.state.items.concat(newItem),
      text: "",
    });

    console.log(this.state);
  }

  handleDelItem = (item) => {
    // 通过 Array 的 filter 方法删除需要删除的条目
    const tmpItems = this.state.items.filter((tmpItem) => item !== tmpItem);

    console.log(item);
    this.setState({
      items: tmpItems,
    });

    // 如果在删除一个元素后 items 为空，则清空 localStorage
    console.log("this.state.items.length:", this.state.items.length);
    if (this.state.items.length - 1 === 0) {
      localStorage.clear();
    }
  }

  handleClearItems = () => {
    this.setState({
      items: [],
    });

    localStorage.clear();
  }

  useLocalStorage = () => {
    // 如果 localStorage 不为空，将 localStorage 中的内容存储到 state 中
    if (this.state.items.length === 0 && localStorage.length !== 0) {
      this.restoreFromLocalStorage();
    }

    // 如果有备忘录，将备忘录存到 localStorage
    if (this.state.items.length !== 0) {
      this.updateLocalStorage();
    }
  }

  updateLocalStorage = () => {
    localStorage.setItem("memorandu", JSON.stringify(this.state.items));
  }

  restoreFromLocalStorage = () => {
    const tmpItems = JSON.parse(localStorage.getItem("memorandu"));
    this.setState({
      items: tmpItems,
    });
  }
}

const Newtab = () => {
  return (
    <div className="App">
      <div className="background">
        <div
          className="background-item"
          style={{
            backgroundImage:
              'url("https://user-images.githubusercontent.com/26371465/201278743-a00cb617-7911-4977-bbd2-e5fcf7abcc5c.jpg")',
          }}
        ></div>
      </div>
      <header className="apps">
        <div className="intro-middle-wrapper">
          <div className="prompt">
            <h1>You are great today</h1>
            <h3>So try your best today</h3>
          </div>
          <div className="memorandum">
            <Memorandum />
          </div>

        </div>
        {/* <div className="intro-lower-right-wrapper">
        </div> */}

      </header>
    </div>
  );
};

export default Newtab;