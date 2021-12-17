class Node{
    constructor(data,next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0

    }

    findNodeAtIndex(index){
        if(!Number.isInteger(index)){
            throw new Error("Index must be integer")
        }
        if(index < 0 || index >= this.size){
            throw new Error(`Wrong index number. Size ${this.size}`)
        }
    
        let i = 0
        let current = this.head
        while(current.next && i<index){
            current = current.next
            i++
        
        }

        return current

    }

    append(data){
        if(!this.head){
            this.head = this.tail = new Node(data)
            this.size++
            return
        }
        const newNode = new Node(data)
        this.tail.next = newNode
        this.tail = newNode
        this.size++

    }

    prepend(data){
        if(!this.head){
            this.head = this.tail = new Node(data)
            this.size++
            return
        }
        const newNode = new Node(data,this.head)
        this.head = newNode
        this.size++
       

    }

    addAtIndex(data,index){
      
        if(index > this.size){
            throw new Error(`Wrong index number. Size ${this.size}`)
        }
        if(index === 0){
            this.prepend(data)
            return
        }
        if(index === this.size){
            this.append(data)
            return

        }

        const current = this.findNodeAtIndex(index - 1)
        const newNode = new Node(data,current.next)
        current.next = newNode
        this.size++

    }

    removeAllNodes(){
        let i = 0
        let current = this.head
        while(i<this.size){
            this.removeLastNode()
        }

    }

    removeFirstNode(){
        if(this.size === 0){
            throw new Error("LinkedList is already empty")
        }
        if(this.size === 1){ 
            this.tail = null     
        }
        this.head = this.head.next
        this.tail = null
        this.size--
      

    }
    removeLastNode(){
        if(this.size === 0){
            throw new Error("LinkedList is already empty")
        }

        if(this.size === 1){
            this.removeFirstNode()
            return
        }

        const current = this.findNodeAtIndex(this.size-2)
        current.next = null
        this.tail = current
        this.size--

    }


    removeAtIndex(index){
        if(!Number.isInteger(index)){
            throw new Error("Index must be integer")
        }
        if(index < 0 || index >= this.size){
            throw new Error(`Wrong index number. Size ${this.size}`)
        }
        if(index === 0){
            this.removeFirstNode()
            return
        }

        if(this.size - 1 === index){
            this.removeLastNode()
            return
        }

        let current = this.findNodeAtIndex(index-1)
        current.next = current.next.next
        this.size--

    }

    getAllData(){
        const dataArray = []
        let i = 0
        let current = this.head
        while(i<this.size){
            dataArray.push(current.data)
            current = current.next
            i++
        }

        return dataArray
    }

  
}






