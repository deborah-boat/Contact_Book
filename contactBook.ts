interface Contact {
    id: number;
    name: string;
    email: string;
    phone?: string;
    tags?: string[];
}
let contacts: Contact[] = [
    { id: 1, name: "Debby Boat", email: "dee@example.com", phone: "123-456-7890", tags: ["friend", "family"] },
    { id: 2, name: "Bob Smith", email: "bob@example.com", phone: "098-765-4321", tags: ["work"] }
];
const addContact = (contact: Contact): void => {
    contacts.push(contact);
    console.log(`Contact "${contact.name}" has been added successfully.`);
}

const findByName = (name: string): Contact[] => {
    const query = name.toLowerCase();
    const results = contacts.filter(c => c.name.toLowerCase().includes(query));
    console.log(`${results.length} contact(s) found matching "${name}".`);
    return results;
}

const removeById = (id: number): boolean => {
    const index = contacts.findIndex(c => c.id === id);
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log(`Contact with ID ${id} has been removed.`);
        return true;
    } else {
        console.log(`Contact with ID ${id} not found.`);
        return false;
    }
}

// Test Code
addContact({ id: 3, name: "Alice Jones", email: "alice@example.com" });
addContact({ id: 4, name: "Charlie Brown", email: "charlie@example.com", phone: "555-1234" });
addContact({ id: 5, name: "Diana Prince", email: "diana@example.com", tags: ["friend"] });

// List all contacts
console.log(contacts);

// Search for a contact by name
const searchResults = findByName("Bob");
console.log("Search Results:", searchResults);

// Remove a contact by ID
removeById(3);

// List all contacts after removal
console.log(contacts);

