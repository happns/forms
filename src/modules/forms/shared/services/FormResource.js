export default function($resource, $parse, Config) {
    const endpoint = Config.forms.api.endpoint;
    const resource = $resource(`${endpoint}/resources`);

    resource.fromForm = form => {
        let objectMap = form.items
            .map(item => item.type === 'section' ? item.items : item)
            .flat()
            .filter(item => item.type === 'question')
            .map(({ question, answer }) => ({ key: question.ask, value: question.answer }));

        let object = {};
        objectMap.forEach(({ key, value }) => $parse(key).assign(object, value));

        Object.assign(object, form.request);

        return object;
    }

    resource.toForm = (form, resource) => {
        const items = form.items
            .map(item => item.type === 'section' ? item.items : item)
            .flat()
            .filter(item => item.type === 'question');

        for (let item of items) {
            item.question.answer = $parse(item.question.ask)(resource);
        }
    }

    return resource;
}