import React from "react"
export enum EXO
{
  X,
  O
}
interface IProperties 
{
  id : number,
  onClick : (id : number, xo : EXO) => void
}
interface IState
{
  content : string
  clicked : boolean
}

export default class Square extends React.Component<IProperties, IState>
{
  public static next : EXO = EXO.X
  /**
   * Повертає або встановлює текст всередині квадрату.
   * Через використання станів 
   */
  public get Content() : string
  {
    return this.state.content
  }
  private set Content(val:string)
  {
    this.setState(state => {return {content: val}})
  }
  // clicked
  public get Clicked() : boolean
  {
    return this.state.clicked
  }
  private set Clicked(val:boolean)
  {
    this.setState(state => {return {clicked: val}})
  }

  constructor(props: IProperties)
  {
    super(props)
    this.state = {
      content:'',
      clicked:false
    }
    // events:
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() : void 
  {
    this.props.onClick(this.props.id, Square.next)
    
    if (!this.Clicked)
    {
      this.Clicked = !this.Clicked
      switch (Square.next)
      {
        case EXO.X:
          this.Content = "X"
          Square.next = EXO.O
          break
        case EXO.O:
          this.Content = "O"
          Square.next = EXO.X
          break
        default:
          console.error("not O or X")
          break
      }
    }
  }

  render(): React.ReactNode {
    return <>
        <button className="square" onClick={this.handleClick}>
          {this.Content}
        </button>
      </>
  }
}

