class TicTacToe {
    constructor() {
        this.current = 'x';
        this.field = [
          [null, null, null],
          [null, null, null],
          [null, null, null] 
        ];
        this.turn = 0;
      
        this.change = {
          x: 'o',
          o: 'x',
        };
    }

    getCurrentPlayerSymbol() {
        return this.current;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] !== null) return;

        this.setFieldValue(rowIndex, columnIndex);
        this.Temp();
        this.changeCurrent(); 
    }

    isFinished() {

      if(this.getWinner() || this.noMoreTurns()) return true;
        return false;

    }

    getWinner() {
        
        
    const Rows = () => {
        let res = null;
        for(let i = 0; i < 3; ++i) {
          const [x, y, z] = this.field[i];
          if(x && x === y && x === z) res = x;
        };
        return res;
      };
        
      const Columns = () => {
        let res = null;  
        for(let i = 0; i < 3; ++i) {
          const arr = [];
          for(let j = 0; j < 3; ++j) arr.push(this.field[j][i]);
          const [x, y, z] = arr;
          if(x && x === y && x === z) res = x;
        };
        return res;
      };
  
      const Diag = () => {
        let res = null;
        const arr = [];
        for(let i = 0; i < 3; ++i) arr.push(this.field[i][i]);
        const [x, y, z] = arr;
        if(x && x === y && x === z) res = x;
        return res;
      };
         
      const anotherDiag = () => {
        let res = null;
        const arr = [];
        for(let i = 0; i < 3; ++i) arr.push(this.field[i][2 - i]);
        const [x, y, z] = arr;
        if(x && x === y && x === z) res = x;
        return res;
      }
  
      return Rows() || Columns() || Diag() || anotherDiag();
    }

    noMoreTurns() {
      return this.turn >= 9;
    }

    isDraw() {
      if(this.getWinner() || !this.noMoreTurns()) return false;
      return true;
    }

    getFieldValue(rowIndex, colIndex) {
      console.log(this.field,rowIndex,colIndex);
      return this.field[rowIndex][colIndex];
    }

    setFieldValue(rowIndex, columnIndex) {
        this.field[rowIndex][columnIndex] = this.current;
      }
    
      changeCurrent() {
        this.current = this.change[this.current];
      }
    
      Temp() {
        this.turn++;
      }

}

module.exports = TicTacToe;
