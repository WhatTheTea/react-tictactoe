import React from "react"
import Square from "./square"
import { EXO } from "./square"
import "./tictactoe.css"

interface IProps
{}
interface IState
{
  squares: EXO[]
}
export default class TicTacToe extends React.Component<IProps, IState>
{
    private get Squares() 
    {
      return this.state.squares
    }

    constructor(props: IProps)
    {
      super(props)
      this.state = {
          squares : Array<EXO>(9)
        }
      
      this.onSquareClick = this.onSquareClick.bind(this)
    }

    render(): JSX.Element {
        return <>
        <div className="board-row">
          <Square id = {0} onClick={this.onSquareClick}/>
          <Square id = {1} onClick={this.onSquareClick} />
          <Square id = {2} onClick={this.onSquareClick} />
        </div>
        <div className="board-row">
          <Square id = {3}  onClick={this.onSquareClick} />
          <Square id = {4}  onClick={this.onSquareClick} />
          <Square id = {5}  onClick={this.onSquareClick}/>
        </div>
        <div className="board-row">
          <Square id = {6}  onClick={this.onSquareClick} />
          <Square id = {7}  onClick={this.onSquareClick} />
          <Square id = {8}  onClick={this.onSquareClick} />
        </div>
      </>
    }

    onSquareClick(id : number, xo : EXO) : void 
    {
      
    }
}



