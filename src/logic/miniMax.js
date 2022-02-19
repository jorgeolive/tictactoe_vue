import checker from '../logic/checker';

class TreeNode {
    constructor(table, parent, currentPlayer, levelOfDepth) {
        this.value = 0
        this.table = table
        this.parent = parent
        this.children = []
        this.currentPlayer = currentPlayer
        this.minMax = currentPlayer == 'O' ? 'MAX' : 'MIN'

        let checkerVal = checker(table)

        if (checkerVal != null) {
            this.isEndGame = true
            if (checkerVal === 'O') {
                this.setValue( 1 * levelOfDepth)
            }
            if (checkerVal === 'X') {
                this.setValue( -1 * levelOfDepth)
            }
        } 
        const results = getChildMovements(table, currentPlayer)

        results.forEach(x => {
            let newNode = new TreeNode(x, this, currentPlayer === 'X' ? 'O' : 'X', levelOfDepth + 1)
            this.addChildNode(newNode)
        })

        if (this.children.length !== 0 && this.value === 0) {
            if (this.minMax === 'MAX')
                this.value = Math.max(...this.children.map(x => x.value))
            if (this.minMax === 'MIN')
                this.value = Math.min(...this.children.map(x => x.value))
        }
    }

    setValue(value) {
        if (this.value === 0) {
            this.value = value
        }
    }

    addChildNode(treeNode) {
        this.children.push(treeNode)
    }
}

export default function miniMax(table, currentPlayer) {
    if (!checker(table)) {
        let treeNode = new TreeNode(table, null, currentPlayer, 0)

        if (currentPlayer == 'O' && treeNode.children.some(x => x.value > 0)) {
            if (treeNode.children.some(x => x.value > 0 && x.isEndGame == true))
                return treeNode.children.filter(x => x.value > 0 && x.isEndGame == true)[0]

            return treeNode.children.filter(x => x.value > 0)[0]
        }

        if (currentPlayer == 'X' && treeNode.children.some(x => x.value < 0)) {
            if (treeNode.children.some(x => x.value < 0 && x.isEndGame == true))
                return   treeNode.children.filter(x => x.value < 0 && x.isEndGame == true)[0]

            return treeNode.children.filter(x => x.value < 0)[0]
        }

        return treeNode.children.filter(x => x.value == 0)[0]
    }
}

function getChildMovements(table, player) {
    let result = []

    if (checker(table) == null) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let tableClone = JSON.parse(JSON.stringify(table))
                if (table[i][j] === " ") {
                    tableClone[i][j] = player
                    result.push(tableClone)
                }
            }
        }
    }

    return result
}