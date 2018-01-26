#!/usr/bin/python

from __future__ import division
from __future__ import absolute_import
from __future__ import print_function

import re

COLOURS = (
    ('#fff', '#000'),
    ('#fff', '#64ceaa'),
    ('#fff', '#fd6c6c'),
    ('#fff', '#70B7FD'),
    ('#000', '#fff'),
)


def load_template():
    with open('page/template.html') as fd:
        data = fd.read()
    with open('page/styles.css') as fd:
        css = fd.read()

    header, _, data = data.partition('<!-- BEGIN EXAMPLE -->')
    example, _, footer = data.partition('<!-- END EXAMPLE -->')

    return header, example, footer, css


def load_side(side):
    path_fmt = 'svg/github-corner-{}.{}'

    with open(path_fmt.format(side, 'svg')) as fd:
        svg = fd.read()
    svg = svg.replace('#fff', '{fg}').replace('#000', '{bg}')
    svg = svg.replace(': ', ':').replace('; ', ';')
    svg = re.sub(r'>\s*<', '><', svg)

    with open(path_fmt.format(side, 'css')) as fd:
        css = fd.read()
    css = re.sub(r'\s*([{}():,;@])\s*', r'\1', css).replace(';}', '}')
    return svg.format, css


def print_header(header, css, **sides):
    for side, side_css in sides.items():
        side_css = side_css.replace('octocat-wave', 'octocat-wave-' + side)
        side_css = side_css.replace('.github-corner',
                                    '.{} .github-corner'.format(side))
        css += side_css
    print(header % dict(css=css))


def main():
    header, example, footer, css = load_template()
    right, right_css = load_side('right')
    left, left_css = load_side('left')

    print_header(header, css, right=right_css, left=left_css)

    for (side, img, css) in (('right', right, right_css),
                             ('left', left, left_css)):
        for (bg, fg) in COLOURS:
            cls = side
            if bg == '#000':
                cls += ' dark'
            print(example % dict(cls=cls, svg=img(fg=fg, bg=bg), css=css))

    print(footer % dict(svg=right(fg='#000', bg='#fff')))


if __name__ == '__main__':
    main()
