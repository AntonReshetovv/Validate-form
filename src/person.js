export class Person {
    static create(person) {
        return fetch(`https://reshetov-validate-form-default-rtdb.firebaseio.com/persons.json`, {
            method: 'POST',
            body: JSON.stringify(person),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
            })
    }
}