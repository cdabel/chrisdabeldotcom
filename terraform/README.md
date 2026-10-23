# terraform

Owns the Route 53 hosted zone for chrisdabel.com and the records that point it
at GitHub Pages. State is local for now and is gitignored.

Workflow, one command at a time:

1. `terraform init`
2. `terraform plan -out=tfplan`, then read the plan.
3. `terraform apply tfplan`

The hosted zone was created by Route 53 Domains at registration and imported
with `terraform import aws_route53_zone.main <zone id>`.
