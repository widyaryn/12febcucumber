Feature: Category Feature kasirAja
    Scenario Outline: Add New Category
        
        Given Website homepage
        When User input <email> and <password>
        When User click login button
        When User click menu kategori
        When User click button tambah
        When User input nama: <nama>
        When User input deskripsi: <deskripsi>
        Then User click button simpan

        Examples:
        | email| password | nama | deskripsi |
        | emailaja@yopmail.com | 12345 | kopi | kopi sachet |