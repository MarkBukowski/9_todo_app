class Todo {
    constructor(task) {
        this.name = task;
        this.list = [];
    }

    summary() {
        const text = `${this.name} sarase yra ${this.list.length} uzduociu.`;
        console.log(text);
    }

    add(text) {
        this.list.push({
            text: text,
            completed: false
        });

        console.log(`"${text}" prideta i uzduociu sarasa.`);
    }

    edit(index, newText) {
        console.log(`"${this.list[index].text}" uzduotis pakeista i "${newText}".`);
        this.list[index].text = newText;
    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            console.log(`KLAIDA: sarase nera uzduoties tokiu numeriu`);
        }
        this.list.splice(index, 1);
        console.log(`Istrinta ${index} uzduotis: "${this.list[index].text}"`);
    }

    print(list = this.list) {
        console.table(list);
    }

    taskCompleted(index) {
        this.list[index].completed = true;
        console.log(`Uzduotis ${this.list[index].text} yra atlikta.`);
    }

    printCompletedOnly() {
        const completed = this.list.filter((n) => n.completed === true);
        this.print(completed);
    }

    notCompletedOnly() {
        const notCompleted = this.list.filter((n) => n.completed === false);
        this.print(notCompleted);
    }
}

export { Todo }