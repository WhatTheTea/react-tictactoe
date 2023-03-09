import React from "react"
import Square from "./square"

export default class TicTacToe extends React.Component
{
    private squares: number = 1

    render(): JSX.Element {
        return <>
        <div className="board-row">
          <Square value={(this.squares++).toString()} />
          <Square value={(this.squares++).toString()} />
          <Square value={(this.squares++).toString()} />
        </div>
        <div className="board-row">
          <Square value={(this.squares++).toString()} />
          <Square value={(this.squares++).toString()} />
          <Square value={(this.squares++).toString()} />
        </div>
        <div className="board-row">
          <Square value={(this.squares++).toString()} />
          <Square value={(this.squares++).toString()} />
          <Square value={this.squares.toString()}/>
        </div>
      </>
    }
}



