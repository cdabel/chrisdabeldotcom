# DNS for chrisdabel.com. The site itself is built by GitHub Actions and
# served by GitHub Pages; this module only owns the Route 53 hosted zone
# and the records that point the domain at Pages.

locals {
  domain = "chrisdabel.com"

  # GitHub Pages apex addresses.
  # https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
  github_pages_ipv4 = [
    "185.199.108.153",
    "185.199.109.153",
    "185.199.110.153",
    "185.199.111.153",
  ]

  github_pages_ipv6 = [
    "2606:50c0:8000::153",
    "2606:50c0:8001::153",
    "2606:50c0:8002::153",
    "2606:50c0:8003::153",
  ]
}

# Created automatically when the domain was registered through Route 53 on
# 2026-10-23 and imported into state so Terraform owns it from here on.
resource "aws_route53_zone" "main" {
  name    = local.domain
  comment = "chrisdabel.com - managed by Terraform in cdabel/chrisdabeldotcom"
}

resource "aws_route53_record" "apex_a" {
  zone_id = aws_route53_zone.main.zone_id
  name    = local.domain
  type    = "A"
  ttl     = 300
  records = local.github_pages_ipv4
}

resource "aws_route53_record" "apex_aaaa" {
  zone_id = aws_route53_zone.main.zone_id
  name    = local.domain
  type    = "AAAA"
  ttl     = 300
  records = local.github_pages_ipv6
}

resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "www.${local.domain}"
  type    = "CNAME"
  ttl     = 300
  records = ["cdabel.github.io"]
}
