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
    private set Squares(val:EXO[])
    {
      this.setState(state => {return {squares: val}})
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
      let squares = this.Squares
      let temp = squares.slice(0)
      temp[id] = xo
      let winner = this.checkWinner(temp)
      if(winner !== null)
      {
        alert(`winner: ${winner === 0 ? 'X' : 'O'}`)
        window.location.reload()
      }

      this.Squares = temp
    }

    checkWinner(squares : EXO[]) : EXO | null
    {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
      for (var line of lines)
      {
        let [s1,s2,s3] = line
        let enum_sum = squares[s1] + squares[s2] + squares[s3]
        switch (enum_sum) 
        {
          case 3:
            return EXO.O
          case 0:
            return EXO.X
        }
      }
      return null
    }

}



