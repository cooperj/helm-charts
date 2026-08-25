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

**Install a chart**

Use a release name and target namespace:

```
helm install my-release joshc/hello-container --namespace my-namespace --create-namespace
```

**Upgrade an existing release**

```
helm upgrade my-release joshc/my-container --namespace my-namespace
```

**Uninstall a release**

```
helm uninstall my-release --namespace my-namespace
```

**Customize values**

Preview defaults:

```
helm show values joshc/hello-container
```

Install with overrides:

```
helm install my-release joshc/hello-container \
  --namespace hello-container \
  --create-namespace \
  --set image.tag=1.2
```

Install with a values file:

```
helm install my-release joshc/hello-container -f values.yaml --namespace hello-container --create-namespace
```

## Provided Charts

<!-- charts:start -->
| Chart | Version | App Version | Description |
|---|---|---|---|
| hello-container | 1.2.0 | 1.2 | A Helm chart for deploying ghcr.io/cooperj/hello-container |
<!-- charts:end -->
