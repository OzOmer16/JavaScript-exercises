class Node{
    constructor(data,next = null){
        this.data = data
        this.next = next

    }
}


class Stack{
    constructor(limit){
        this.size = 0
        this.limit = limit
        this.top = null

    }

    isEmpty(){
        return this.size === 0
    }

    push(data){
        if(!this.top){
            const newNode = new Node(data)
            this.top = newNode
            this.size++
            return
        }

        if(this.size === this.limit){
            throw new Error("Stack overflow")
        }

        const newNode = new Node(data,this.top)
        this.top = newNode
        this.size++

    }


    pop(){
        if(this.isEmpty()){
            throw new Error("Stack underflow")
        }
        const node = this.top
        this.top = this.top.next
        this.size--
        return node.data

    }

    peek(){
        if(this.isEmpty()){
            throw new Error("Stack is empty")
        }

        return this.top.data
    }

    getAllData(){
        const allData = []
        let current = this.top
        let i = 0
        while(i<this.size){
            allData.push(current.data)
            current = current.next
            i++
        }
        return allData
    }

    
}



