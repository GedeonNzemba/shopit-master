const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    nom: {
        type: String,
        // required: [true, 'Veuillez saisir le nom du produit'],
        trim: true,
        maxLength: [100, 'Le nom du produit ne peut pas dépasser 100 caractères']
    },
    french: {
        name: {
            type: String,
            // required: [true, 'Veuillez saisir le nom du produit'],
            trim: true,
            maxLength: [100, 'Le nom du produit ne peut pas dépasser 100 caractères']
        },
        price: {
            type: Number,
            // required: [true, 'Please enter product price'],
            maxLength: [5, 'Product name cannot exceed 5 characters'],
            default: 0
        },
        description: {
            type: String,
            // required: [true, 'Please enter product description'],
        },
        category: {
            type: String,
            enum: {
                values: [
                    'Poultry',
                    'Fresh Eggs',
                    'Pigsty',
                    'Goats, Sheep & mammals',
                    'Park Animals',
                    'Purebred Seed - ARTIFICIAL INSEMINATION',
                    'Food & Livestock Products'
                ],
                message: 'Please select correct category for product'
            }
        },
    },
    price: {
        type: Number,
        // required: [true, 'Please enter product price'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0
    },
    description: {
        type: String,
        // required: [true, 'Please enter product description'],
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
               
            },
            url: {
                type: String,
               
            },
        }
    ],
    category: {
        type: String,
        required: [true, 'Veuillez sélectionner une catégorie pour ce produit'],
        enum: {
            values: [
                'Poultry',
                'Fresh Eggs',
                'Pigsty',
                'Goats, Sheep & mammals',
                'Park Animals',
                'Purebred Seed - ARTIFICIAL INSEMINATION',
                'Food & Livestock Products',
                "la volaille",
                "Oeufs Frais",
                "Porcherie",
                "Chèvres, moutons et mammifères",
                "Animaux du parc",
                "Graine de race pure - INSEMINATION ARTIFICIELLE",
                "Produits alimentaires et d'élevage"
            ],
            message: 'Veuillez sélectionner la catégorie correcte pour le produit'
        }
    },
    // seller: {
    //     type: String,
    //     required: [true, 'Please enter product seller']
    // },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema);