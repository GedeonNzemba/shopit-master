const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter product description'],
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    size: {
        type: String,
        required: [true, 'Please enter the product size'],
        enum: {
            values: [
                '0 KG',
                '2 KG',
                ' 50 KG',
                '3 L',
                '5 L',
                '10 L',
                ' Medium',
                ' Large',
                ' Verrat',
                'Trout',
                '1 Dose',
                ' 1 T'
            ],
            message: 'Please select correct size for product'
        }
    },
    color: {
        type: String,
        enum: {
            values: [
                'Grey',
                'White',
                'Bronze',
                'Maroon',
                'Blue',
                'Black',
                'Yellow'
            ],
            message: 'Please select the correct color for the product'
        }
    },
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
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
    seller: {
        type: String,
        required: [true, 'Please enter product seller']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
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