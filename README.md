# Josh's Helm Charts

This is my collection of random Helm charts for things that are for projects I have built or other things I want to host in my [Homelab](https://joshc.uk/tags/homelab?ref=helm-charts-repo) but I have not found a chart I am happy with. Feel free to use these charts, but be aware they're provided as-is.

## Getting Started

Ensure you have [Helm](https://helm.sh) installed, and access to a [Kubernetes](https://kubernetes.io/) cluster. Then you can add my repo.

```
helm repo add joshc https://charts.joshc.uk
helm repo update
```

**Discover available charts**

```
helm search repo joshc
helm search repo joshc --versions
```

> [!NOTE]
> For the rest of this example we will be running my example web server container, `hello-container`. This provides a very simple web server with text values that can be overridden with environment variables or chart values.

**Install a chart**

Use a release name and target namespace:

```
helm install hello-container joshc/hello-container --namespace hello-container --create-namespace
```

**Upgrade an existing release**

```
helm upgrade hello-container joshc/hello-container --namespace hello-container
```

**Uninstall a release**

```
helm uninstall hello-container --namespace hello-container
```

**Customize values**

Preview defaults:

```
helm show values joshc/hello-container
```

Install with overrides:

```
helm install hello-container joshc/hello-container \
  --namespace hello-container \
  --create-namespace \
  --set image.tag=1.2
```

Install with a values file:

```
helm install hello-container joshc/hello-container -f values.yaml --namespace hello-container --create-namespace
```

## Provided Charts

<!-- charts:start -->
| Chart | Version | App Version | Description |
|---|---|---|---|
| hello-container | 1.2.1 | 1.2.1 | A Helm chart for deploying ghcr.io/cooperj/hello-container |
<!-- charts:end -->
