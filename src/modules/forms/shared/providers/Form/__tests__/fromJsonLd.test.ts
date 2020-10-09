import fromJsonLd from '../fromJsonLd';

it('should create a form for a single context type', async () => {

    const jsonLd = {
        '@type': 'mime:application/json',
        '@value': 'data:application/json,{ "json": "test" }'
    }

    const actual = fromJsonLd(jsonLd);
    const expected = {
        items: [
            { ask: 'File content' }
        ]
    }

    expect(actual).toStrictEqual(expected);
});

it('should create a form for a resource with multiple properties', async () => {

    const jsonLd = {
        '@context': {
            'heading': 'https://forms.happns.io/schema/shortText',
            'subheading': 'https://forms.happns.io/schema/shortText',
            'description': 'https://forms.happns.io/schema/longText'
        }
    }

    const actual = fromJsonLd(jsonLd);
    const expected = {
        items: [
            { ask: 'heading' },
            { ask: 'subheading' },
            { ask: 'description' }
        ]
    }

    expect(actual).toStrictEqual(expected);
});

it('should create a form for a resource with a compound properties', async () => {

    const jsonLd = {
        '@context': {
            "section": "https://design.happns.io/schema/section",
            "createdAt": "https://schema.org/DateTime",
            "backgroundColor": "http://schema.org/color"
        }
    }

    const actual = fromJsonLd(jsonLd);
    const expected = {
        items: [
            { ask: 'heading' },
            { ask: 'subheading' },
            { ask: 'description' }
        ]
    }

    expect(actual).toStrictEqual(expected);
});

it('should create a form for a resource with a collection', async () => {

    const jsonLd = {
        "@context": {
            "children": {
                "@id": 'https://design.happns.io/schema/section',
                "@container": "@list"
            }
        }
    }

    const actual = fromJsonLd(jsonLd);
    const expected = {
        items: [
            { ask: 'heading' },
            { ask: 'subheading' },
            { ask: 'description' }
        ]
    }

    expect(actual).toStrictEqual(expected);
});
