import React from "react"

interface IProperties 
{
  value : string
}
interface IState
{
  content : string
  clicked : boolean
}

export default class Square extends React.Component<IProperties, IState>
{
  // content
  private get content() : string
  {
    return this.state.content
  }
  private set content(val:string)
  {
    this.setState(state => {return {content: val}})
  }
  // clicked
  private get clicked() : boolean
  {
    return this.state.clicked
  }
  private set clicked(val:boolean)
  {
    this.setState(state => {return {clicked: val}})
  }

  constructor(properties: IProperties)
  {
    super(properties)
    this.state = {
      content:properties.value.toString(),
      clicked:false
    }
    // events:
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() : void 
  {
    console.log(`clicked ${this.content}`)
    this.clicked = !this.clicked
    this.content = this.clicked ? "X" : "O"
  }

  render(): React.ReactNode {
    return <>
        <button className="square" onClick={this.handleClick}>
          {this.content}
        </button>
      </>
  }
}

