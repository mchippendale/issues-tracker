# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


issues = Issue.create([
    {
        title: "Small Issue",
        description: "this is a very small issue that needs to be resolved soon.",
        status: "open"
    },
    {
        title: "Medium Issue",
        description: "this is a medium issue that needs to be resolved quickly.",
        status: "open"
    },
    {
        title: "Large Issue",
        description: "this is a big issue that needs to be resolved as soon as possible.",
        status: "open"
    }
])