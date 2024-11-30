// routes/swap/[id]/+page.server.js
export async function load({ params }) {
    const id = params.id;
    return {
        id: id 
    };
}