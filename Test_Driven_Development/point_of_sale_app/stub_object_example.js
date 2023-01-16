class StubUserDatabase {
    ...
    connect() {
        return 1;
    }

    getUser(id) {
        const mockUser = {
            id: id,
            firstName: "Sandeep",
            lastName: "Seeram",
            description: "Technology Blogger",
            url: "https://www.sandeepseeram.com"
        };
        return mockUser;
    }
}
