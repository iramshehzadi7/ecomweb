import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard, { Product } from './components/product-card';

const products: Product[] = [
    {
        id: '1',
        name: 'Margarita Pizza',
        description: 'This is a very delicious pizza',
        image: '/margarita.jpg',
        price:400
    },
    {
        id: '2',
        name: 'Fajeeta Pizza',
        description: 'This is a very tasty pizza',
        image: '/fajeeta.jpg',
        price: 300,
    },
    {
        id: '3',
        name: 'Bar b q Pizza',
        description: 'This is a very yummy pizza',
        image: '/barbq.jpg',
        price: 250,
    },
    {
        id: '4',
        name: 'Macroni Pizza',
        description: 'This is a very mouth-watering pizza',
        image: '/macroni.jpg',
        price: 500,
    },
    {
        id: '5',
        name: 'Chicken Pizza',
        description: 'This pizza will increase your hunger ',
        image: '/chicken.jpg',
        price: 350,
    },
];

export default function Home() {
    return (
        <>
            <section className="bg-pink">
                <div className="container flex items-center justify-between py-24">
                    <div>
                        <h1 className="text-7xl font-black font-sans leading-2">
                            Super tasty Pizza in <br />
                            <span className="text-primary">Only 30 Minutes!</span>
                        </h1>
                        <p className="text-2xl mt-8 max-w-lg leading-snug">
                            Enjoy a Free Meal if Your Order Takes More Than 30 Minutes!
                        </p>
                        <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
                            Get your pizza now
                        </Button>
                    </div>
                    <div>
                        <Image alt="pizza-main" src={'/pizza-main.png'} width={400} height={400} />
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-12">
                    <Tabs defaultValue="pizza">
                        <TabsList>
                            <TabsTrigger value="pizza" className="text-md">
                                Pizza
                            </TabsTrigger>
                            <TabsTrigger value="cold drinks" className="text-md">
                                Beverages
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="pizza">
                            <div className="grid grid-cols-4 gap-6 mt-6">
                                {products.map((product) => (
                                    <ProductCard product={product} key={product.id} />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="cold drinks">
                            <div className="grid grid-cols-4 gap-6 mt-6">
                                {products.map((product) => (
                                    <ProductCard product={product} key={product.id} />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </>
    );
}
