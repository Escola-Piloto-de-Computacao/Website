import React from 'react';
import { Button, Popover, ConfigProvider } from 'antd';

interface info {
    titulo: string;
    descricao: string;
}

const buttonWidth = 80;

const LerMais: React.FC<info> = (props) => {
    const text = <span>{props.titulo}</span>;

    const content = (
        <div className="w-56 text-justify text-base">
            <p>{props.descricao}</p>
        </div>
    );

    return (
        <ConfigProvider
            button={{ style: { width: buttonWidth, borderColor: 'transparent'}, }}>
            <div className="flex justify-end">
                <Popover placement="right" title={text} content={content}>
                    <Button className="text-blue-700">ler tudo &gt;</Button>
                </Popover>
            </div>
        </ConfigProvider>
    );
};

export default LerMais;