export default async function(scope, element, attrs) {
    const { type, clientId } = attrs;

    scope.clientId = clientId;

    await scope.loadForm({ type });

    await scope.loadResource({ type, client_id: clientId });
}