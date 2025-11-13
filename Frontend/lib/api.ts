import { Product } from "@/type";

const API_URL = "https://fakestoreapi.com";

// Pour tous les produits

export const getProducts = async (): Promise<Product[]> => {
    try {
        //Appel API au endpoint products
       const response = await fetch(`${API_URL}/products`);
       if (!response.ok) {
        //gestion de l'erreur si la réponse n'est pas ok
        throw new Error('Network response was not ok');
       }
       // Conversion du corps de la réponse json en tableau de produit
       return await response.json();
    } catch (error) {
        console.log('Error fetching products:', error);
        throw error;
    }
};

// Récupère un produit unique par son identifiant (id)
export const getProduct = async (id:number): Promise<Product> => {
    try {
        // Effectue une requête fetch vers l'API pour récupérer un produit spécifique
        const response = await fetch(`${API_URL}/products/${id}`);
        // Vérifie si la réponse est OK (code HTTP 200-299)
        if (!response.ok) {
            // Lance une erreur si la réponse n'est pas correcte
            throw new Error('Network response was not ok');
        }
        // Retourne les données JSON converties en objet Product
        return await response.json();
    } catch (error) {
        // Affiche une erreur dans la console en indiquant l'id du produit concerné
        console.error('Error fetching product with id ${id}:', error);
        // Relance l'erreur pour être gérée ailleurs
        throw error;
    }
};

//All Categories
// Récupère toutes les catégories de produits disponibles
export const getCategories = async (): Promise<string[]> => {
    try {
        // Effectue une requête fetch pour obtenir la liste des catégories
        const response = await fetch(`${API_URL}/products/categories`);
        // Vérifie la validité de la réponse
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Retourne la liste des catégories sous forme de tableau de chaînes
        return await response.json();
    } catch (error) {
        // Affiche une erreur lors de la récupération des catégories
        console.log('Error fetching products:', error);
        // Relance l'erreur
        throw error;
    }
};


