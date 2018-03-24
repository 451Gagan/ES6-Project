const app = new function() {
    this.el = document.getElementById('names');
    this.names = ['Arsh', 'Gagan', 'Garima'];
    this.roll = [11, 12, 13];
    this.branch = ['CSE', 'CSE', 'CSE'];
    this.year = [2020, 2019, 2019];    

    FetchAll = () => {
        let data = '';
        let getit = this.roll[Symbol.iterator]();
        if (this.names.length > 0) {
            for (i = 0; i < this.names.length; i++) {
                data += `<tr>
                <td> ${i+1}</td>
                <td> ${this.roll[i]}</td>
                <td> ${this.names[i]}</td>
                <td> ${this.branch[i]}</td>
                <td> ${this.year[i]}</td>
                <td><button class="btn btn-primary" onclick="Edit(${i})">Edit</button></td>
                <td><input type="checkbox" class="ch"></td>
                <td><button class="btn btn-danger" onclick="Delete(${i})">Delete</button></td></tr>`;
            }
        }
        this.el.innerHTML = data;
    };

    Add =  () => {      
        el = document.getElementById('add-name');
        el1 = document.getElementById('add-roll');
        el2 = document.getElementById('add-branch');
        el3 = document.getElementById('add-year');

        let name = el.value;
        let rollno = el1.value;
        let Cbranch = el2.value;
        let pyear = el3.value;
    
        let flag = 0;
        for(const rol of this.roll)
        {
            if(rol == rollno){
                flag = 1;
                break;
            }
        }
        
        if( flag == 1){
            let msg = `Please enter valid unique roll number.`
            alert(msg);
        }
        else{
            this.roll.push(rollno);
            this.names.push(name);
            this.branch.push(Cbranch);
            this.year.push(pyear);
        }

        FetchAll();

        el.value = '';
        el1.value = '';
        el2.value = '';
        el3.value = '';
    };

    Edit = (item) => {
        let el = document.getElementById('edit-name');
        let el1 = document.getElementById('edit-roll');
        let el2 = document.getElementById('edit-branch');
        let el3 = document.getElementById('edit-year');

        el.value = this.names[item];
        el1.value = this.roll[item];
        el2.value = this.branch[item];
        el3.value = this.year[item];

        document.getElementById('spoiler').style.display = 'block';
        document.getElementById('saveEdit').onsubmit =()=> {

            let name = el.value;
            let rollno = el1.value;
            let Cbranch= el2.value;
            let pyear = el3.value;
        
            if (name && rollno && Cbranch && pyear) {
                this.names.splice(item, 1, name);
                this.roll.splice(item, 1, rollno);
                this.branch.splice(item, 1, Cbranch);
                this.year.splice(item, 1, pyear);

                document.getElementById('spoiler').style.display = 'none';
                FetchAll();
            }
            else
                alert(`Please enter all values`);
        }
    };

    Del = (item) => {
        this.names.splice(item, 1);
        this.roll.splice(item, 1);
        this.branch.splice(item, 1);
        this.year.splice(item, 1);
    };  

    Delete = (item) => {
        Del(item);
        FetchAll();
    };  

    DeleteMultipleRows = () => {
        let check = document.getElementsByClassName("ch");
        let length = this.names.length;
        let i = 0;
        let j = 0;
        let flag = 0;
        
        for(let count of check){                
            if(count.checked){
                Del(i - j);
                j++;
                flag = 1;
            }
            i++;
        }
        if(flag==0)
            alert('No row selected!');        
        FetchAll();
      }
}

FetchAll();
