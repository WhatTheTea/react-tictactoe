import React from "react"
import Square from "./square"
import "./tictactoe.css"

interface IProps
{}
interface IState
{
  squares: string[][]
}
export default class TicTacToe extends React.Component<IProps, IState>
{
    private square_count: number = 1
    private get Squares() 
    {
      return this.state.squares
    }

    constructor(props: IProps)
    {
      super(props)
      this.state = {
          squares : Array(3).fill(Array<string>(3).fill(''))
        }
    }

    render(): JSX.Element {
        return <>
        <div className="board-row">
          <Square value={this.Squares[0][0]} />
          <Square value={this.Squares[0][1]} />
          <Square value={this.Squares[0][2]} />
        </div>
        <div className="board-row">
          <Square value={this.Squares[1][0]} />
          <Square value={this.Squares[1][1]} />
          <Square value={this.Squares[1][2]} />
        </div>
        <div className="board-row">
          <Square value={this.Squares[2][0]} />
          <Square value={this.Squares[2][1]} />
          <Square value={this.Squares[2][2]} />
        </div>
      </>
    }
}



