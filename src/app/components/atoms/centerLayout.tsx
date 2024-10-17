export default function CenterLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
return (
    <div className='flex items-center justify-center h-[100vh] '>
        <div className='flex justify-center container mx-auto md:px-[70px] max-w-screen-2xl'>
        {children}
        </div>
    </div>
);
}