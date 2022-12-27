import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';
import { Adsense } from '@ctrl/react-adsense';
import { Input } from 'antd';

const { Search } = Input;

const configuration = new Configuration({
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);

function ConnectOpenIA() {
    const [query, setQuery] = useState<string>('');
    const [data, setData] = useState<string>('');

    const openAI = async () => {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: query,
            max_tokens: 1000,
            temperature: 0,
        });

        if (response.data.choices[0].text) {
            console.log(response.data.choices[0].text);
            setData(response.data.choices[0].text);
        } else {
            setData("Ocorreu um erro inesperado.");
        }

    }

    return (
        <div className='w-screen h-screen overflow-hidden flex justify-center items-center bg-slate-800 flex-col'>
            <Search
                className='w-2/4 bg-blue-700 rounded-md'
                placeholder="Qual a sua duvida?"
                enterButton="Search"
                size="large"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onSearch={openAI}
            />
            {data &&
                <div className='mt-8 bg-slate-50 px-8 py-6 rounded-2xl text-slate-900 shadow-lg'>
                    <p>{data}</p>
                </div>
            }

            <Adsense
                client="ca-pub-1699206996120048"
                slot="7259870550"
            />

            <Adsense
                client="ca-pub-1699206996120048"
                slot="7259870550"
                style={{ width: 500, height: 300 }}
                format=""
            />

            <Adsense
                client="ca-pub-1699206996120048"
                slot="7259870550"
                style={{ display: 'block' }}
                layout="in-article"
                format="fluid"
            />
        </div>
    )
}

export default ConnectOpenIA;