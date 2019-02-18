class Group {
    constructor() {
        this._group = [];
    }

    add(val) {
        let index = this._group.indexOf(val);
        if (index < 0) this._group.push(val);
    }

    delete(val)  {
        let index = this._group.indexOf(val);
        if (index >= 0) {
            this._group = this._group.slice(0,index)
            .concat(this._group.slice(index+1));
        }
    }

    has(val) {
        return (this._group.indexOf(val) != -1);
    }

    static from(iterable) {
        let newgroup = new Group();
        for (let e of iterable) {
            newgroup.add(e);
        }
        return newgroup;
    }
}