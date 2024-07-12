

const NotificationComponent: React.FC=() => {


    return (
        <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#000000c2] h-44 border-brown border-2 text-gray-300 mx-4 p-4 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-bold mb-4">Su orden fue tomada</h2>
                <p>Pronto sera redireccionado al <span className="text-green-700 font-bold">WhatsApp</span> con su orden. Gracias por su compra, vuelva pronto.</p>

            </div>
        </div>
    );
};

export default NotificationComponent;
