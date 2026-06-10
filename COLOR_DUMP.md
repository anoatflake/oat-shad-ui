@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
:root {
--background: 0.8852 0.189 163.85;
--foreground: 0.1371 0.036 258.53;
--card: 0.8852 0.189 163.85;
--card-foreground: 0.1371 0.036 258.53;
--popover: 0.8852 0.189 163.85;
--popover-foreground: 0.1371 0.036 258.53;
--primary: 0.2079 0.0399 265.73;
--primary-foreground: 0.9838 0.0035 247.86;
--secondary: 0.7272 0.0972 275.17;
--secondary-foreground: 0.2079 0.0399 265.73;
--muted: 0.7946 0.1549 171.43;
--muted-foreground: 0.4939 0.0271 209.88 /_0.5547 0.0407 257.44_/;
--accent: 0.7272 0.0972 275.17;
--accent-foreground: 0.2079 0.0399 265.73;
--destructive: 0.6368 0.2078 25.33; /_0.5771 0.2151 27.32_/
--destructive-foreground: 0.9838 0.0035 247.86; /_ TODO: THIS WHITE WITH THIS RED IS NOT A11Y _/
--border: 0.7946 0.1549 171.43;
--input: 0.7946 0.1549 171.43;
--outline: 0.1371 0.036 258.53;
--ring: 0.1371 0.036 258.53;
--radius: 0.5rem;
--chart-1: 0.6772 0.1571 35.19;
--chart-2: 0.6309 0.1013 183.49;
--chart-3: 0.3787 0.044 225.54;
--chart-4: 0.8336 0.1186 88.15;
--chart-5: 0.7834 0.1261 58.75;

    --blood_shot_eyes-50: 0.9599 0.0244 63.76;
    --blood_shot_eyes-100: 0.9418 0.0329 55.95;
    --blood_shot_eyes-200: 0.9153 0.0482 52.85;
    --blood_shot_eyes-300: 0.8792 0.0666 44.09;
    --blood_shot_eyes-400: 0.7372 0.0863 37.32;
    --blood_shot_eyes-500: 0.6034 0.102 31.94;
    --blood_shot_eyes-600: 0.4829 0.1114 28.32;
    --blood_shot_eyes-700: 0.4354 0.1173 23.95;
    --blood_shot_eyes-800: 0.3943 0.1177 26.1;
    --blood_shot_eyes-900: 0.3577 0.1255 27.67;
    --blood_shot_eyes-950: 0.2781 0.1045 32.32;

    --teal_background-50: 0.9806 0.0295 154.72;
    --teal_background-100: 0.9555 0.07 154.91;
    --teal_background-200: 0.922 0.1265 157.37;
    --teal_background-300: 0.8995 0.1663 159.38;
    --teal_background-400: 0.8907 0.1802 162.08;
    --teal_background-500: 0.8853 0.1888 163.92;
    --teal_background-600: 0.7945 0.153 172.71;
    --teal_background-700: 0.7002 0.1241 183.91;
    --teal_background-800: 0.5978 0.1019 195.63;
    --teal_background-900: 0.4896 0.0844 209.1;
    --teal_background-950: 0.2854 0.0519 226.99;

    --skin-50: 0.9582 0.0182 269.08;
    --skin-100: 0.9163 0.0371 268.89;
    --skin-200: 0.8258 0.074 271.14;
    --skin-300: 0.7619 0.1003 271.86;
    --skin-400: 0.6957 0.1088 270.96;
    --skin-500: 0.6317 0.1251 272.97;
    --skin-600: 0.5519 0.1342 276.62;
    --skin-700: 0.509 0.1276 272.59;
    --skin-800: 0.4014 0.1283 271.65;
    --skin-900: 0.3215 0.13 270.73;
    --skin-950: 0.2206 0.1007 274.38;

    --gold-50: 0.982 0.0164 91.55;
    --gold-100: 0.967 0.0286 91.64;
    --gold-200: 0.9291 0.0594 91.46;
    --gold-300: 0.8856 0.0968 92.16;
    --gold-400: 0.842 0.1278 91.2;
    --gold-500: 0.793 0.1512 88.59;
    --gold-600: 0.7337 0.1442 87.62;
    --gold-700: 0.6664 0.1304 87.44;
    --gold-800: 0.5886 0.1146 88.18;
    --gold-900: 0.4606 0.0883 89.04;
    --gold-950: 0.3649 0.0682 88.67;

    --eva_danger-50: 0.9634 0.0187 38.16;
    --eva_danger-100: 0.9414 0.0298 12.59;
    --eva_danger-200: 0.8864 0.0628 4.81;
    --eva_danger-300: 0.8367 0.0974 0.64;
    --eva_danger-400: 0.8027 0.1272 355.44;
    --eva_danger-500: 0.7524 0.1761 351.15;
    --eva_danger-600: 0.6535 0.1822 346.73;
    --eva_danger-700: 0.5608 0.1815 341.96;
    --eva_danger-800: 0.472 0.1721 337.38;
    --eva_danger-900: 0.4116 0.1643 332.8;
    --eva_danger-950: 0.3325 0.1468 312.76;

    --aqua_green-50: 0.9803 0.0271 173.76;
    --aqua_green-100: 0.9554 0.0641 170.35;
    --aqua_green-200: 0.9245 0.1137 170.35;
    --aqua_green-300: 0.8984 0.1598 169.39;
    --aqua_green-400: 0.8853 0.1887 163.91;
    --aqua_green-500: 0.8237 0.1775 163.2;
    --aqua_green-600: 0.7094 0.1517 163.77;
    --aqua_green-700: 0.603 0.1238 166.83;
    --aqua_green-800: 0.5088 0.1023 168.58;
    --aqua_green-900: 0.4416 0.0869 170.57;
    --aqua_green-950: 0.3038 0.0582 173.2;

    --evergreen-50: 0.9793 0.0078 177.33;
    --evergreen-100: 0.9374 0.0331 172.82;
    --evergreen-200: 0.8745 0.0639 172.24;
    --evergreen-300: 0.7926 0.0923 172.39;
    --evergreen-400: 0.6995 0.1024 173.7;
    --evergreen-500: 0.5795 0.0934 173.17;
    --evergreen-600: 0.5242 0.0853 173.66;
    --evergreen-700: 0.4514 0.0683 175.82;
    --evergreen-800: 0.3916 0.0543 177.29;
    --evergreen-900: 0.3504 0.0428 179.08;
    --evergreen-950: 0.25 0.0343 179.41;

    --periwinkle-50: 0.9692 0.0103 261.79;
    --periwinkle-100: 0.9427 0.02 267.29;
    --periwinkle-200: 0.8827 0.0404 268.51;
    --periwinkle-300: 0.8198 0.0616 269.61;
    --periwinkle-400: 0.7272 0.0972 275.17;
    --periwinkle-500: 0.6463 0.1252 278.15;
    --periwinkle-600: 0.5526 0.1547 278.78;
    --periwinkle-700: 0.4892 0.1475 278.99;
    --periwinkle-800: 0.4274 0.1225 279.3;
    --periwinkle-900: 0.3913 0.0872 279.06;
    --periwinkle-950: 0.276 0.0567 280.6;

    --cornflower-50: 0.9683 0.0136 258.34;
    --cornflower-100: 0.9384 0.0249 263.33;
    --cornflower-200: 0.8892 0.0462 263.7;
    --cornflower-300: 0.8132 0.0773 267.55;
    --cornflower-400: 0.7615 0.0989 271.72;
    --cornflower-500: 0.6336 0.1536 273.69;
    --cornflower-600: 0.5366 0.1901 274.9;
    --cornflower-700: 0.4738 0.1815 274.84;
    --cornflower-800: 0.4179 0.1462 275.25;
    --cornflower-900: 0.3842 0.1043 275.51;
    --cornflower-950: 0.2706 0.0679 277.35;

    --apricot-50: 0.9763 0.0105 39.44;
    --apricot-100: 0.9503 0.0228 41.4;
    --apricot-200: 0.9118 0.0446 42.41;
    --apricot-300: 0.8748 0.0629 41.82;
    --apricot-400: 0.7673 0.1227 41.79;
    --apricot-500: 0.6917 0.1579 40.81;
    --apricot-600: 0.6222 0.1698 39.75;
    --apricot-700: 0.5449 0.1514 39.71;
    --apricot-800: 0.4792 0.1258 40.01;
    --apricot-900: 0.43 0.1022 40.7;
    --apricot-950: 0.2801 0.0685 40.84;

    --rust-50: 0.9752 0.0077 27.23;
    --rust-100: 0.9476 0.0155 27.28;
    --rust-200: 0.9023 0.0327 24.8;
    --rust-300: 0.8333 0.0561 25.23;
    --rust-400: 0.7372 0.0898 26.34;
    --rust-500: 0.6479 0.1191 27.25;
    --rust-600: 0.5711 0.1281 28.32;
    --rust-700: 0.4829 0.1114 28.32;
    --rust-800: 0.4213 0.0953 27.88;
    --rust-900: 0.3223 0.0686 27.98;
    --rust-950: 0.2739 0.0541 28.07;

    --charcoal-50: 0.9764 0.0013 286.38;
    --charcoal-100: 0.9505 0.0029 308.43;
    --charcoal-200: 0.89 0.0042 301.42;
    --charcoal-300: 0.792 0.0073 304.21;
    --charcoal-400: 0.6708 0.0118 297.51;
    --charcoal-500: 0.5749 0.014 301.1;
    --charcoal-600: 0.4949 0.0146 301.02;
    --charcoal-700: 0.4317 0.0101 301.12;
    --charcoal-800: 0.4094 0.0102 301.09;
    --charcoal-900: 0.3548 0.007 297.48;
    --charcoal-950: 0.275 0.0056 301.16;

    --outer_space-50: 0.9738 0.0032 197.1;
    --outer_space-100: 0.9317 0.0075 197.03;
    --outer_space-200: 0.8672 0.0131 202.91;
    --outer_space-300: 0.7732 0.0231 200.18;
    --outer_space-400: 0.6487 0.0328 204.13;
    --outer_space-500: 0.5557 0.0329 207.06;
    --outer_space-600: 0.4939 0.0271 209.88;
    --outer_space-700: 0.4612 0.023 212.7;
    --outer_space-800: 0.3988 0.0174 213.24;
    --outer_space-900: 0.361 0.0138 226.36;
    --outer_space-950: 0.2712 0.0114 225.55;

    --fall_green-50: 0.9764 0.0132 106.64;
    --fall_green-100: 0.9438 0.0381 108.72;
    --fall_green-200: 0.8992 0.0679 108.6;
    --fall_green-300: 0.8281 0.1086 107.39;
    --fall_green-400: 0.7679 0.1259 105.42;
    --fall_green-500: 0.709 0.1184 102.86;
    --fall_green-600: 0.6173 0.1001 96.32;
    --fall_green-700: 0.5144 0.0769 89.18;
    --fall_green-800: 0.4524 0.0601 83.46;
    --fall_green-900: 0.4061 0.0478 76.9;
    --fall_green-950: 0.278 0.0323 73.83;

    --mustard-50: 0.9869 0.0214 95.28;
    --mustard-100: 0.9664 0.0615 97.38;
    --mustard-200: 0.9317 0.12 96.91;
    --mustard-300: 0.8984 0.152 93.74;
    --mustard-400: 0.8523 0.1687 86.16;
    --mustard-500: 0.784 0.1668 72.03;
    --mustard-600: 0.6778 0.1593 59.48;
    --mustard-700: 0.5659 0.146 50.7;
    --mustard-800: 0.4794 0.1256 47.31;
    --mustard-900: 0.4201 0.1065 47.46;
    --mustard-950: 0.2826 0.075 47.14;

    --blue_chill-50: 0.9867 0.0182 184.28;
    --blue_chill-100: 0.9594 0.0586 189.67;
    --blue_chill-200: 0.9292 0.107 188.93;
    --blue_chill-300: 0.9058 0.1423 187.78;
    --blue_chill-400: 0.8518 0.1453 189.84;
    --blue_chill-500: 0.7747 0.1331 191.7;
    --blue_chill-600: 0.6617 0.1133 193.27;
    --blue_chill-700: 0.5978 0.1019 195.63;
    --blue_chill-800: 0.4667 0.0779 197.2;
    --blue_chill-900: 0.4123 0.067 196.3;
    --blue_chill-950: 0.2885 0.0491 201.22;

    --hopbush-50: 0.9728 0.0124 337.52;
    --hopbush-100: 0.951 0.0241 336.1;
    --hopbush-200: 0.9047 0.0474 339.18;
    --hopbush-300: 0.8297 0.0919 341.07;
    --hopbush-400: 0.7301 0.1482 343.69;
    --hopbush-500: 0.6535 0.1822 346.73;
    --hopbush-600: 0.5799 0.1917 351.48;
    --hopbush-700: 0.5108 0.1777 354.09;
    --hopbush-800: 0.4488 0.1493 354.35;
    --hopbush-900: 0.402 0.1254 353.83;
    --hopbush-950: 0.279 0.0913 353.52;

    --cotton_candy-50: 0.9699 0.0156 2.66;
    --cotton_candy-100: 0.9406 0.032 0.81;
    --cotton_candy-200: 0.8935 0.0602 0.14;
    --cotton_candy-300: 0.8367 0.0974 0.64;
    --cotton_candy-400: 0.7252 0.1798 3.12;
    --cotton_candy-500: 0.6549 0.2253 6.54;
    --cotton_candy-600: 0.598 0.2298 7.3;
    --cotton_candy-700: 0.5266 0.2056 6.21;
    --cotton_candy-800: 0.465 0.1794 2.82;
    --cotton_candy-900: 0.42 0.1595 359.68;
    --cotton_candy-950: 0.2768 0.1074 1.92;

    --royal_purple-50: 0.9793 0.0118 313.22;
    --royal_purple-100: 0.952 0.0282 313.35;
    --royal_purple-200: 0.9111 0.0537 312.37;
    --royal_purple-300: 0.8432 0.0942 312.74;
    --royal_purple-400: 0.7456 0.1565 312.4;
    --royal_purple-500: 0.6559 0.2093 312.11;
    --royal_purple-600: 0.5859 0.2302 311.77;
    --royal_purple-700: 0.5212 0.2182 312.04;
    --royal_purple-800: 0.4599 0.182 312.92;
    --royal_purple-900: 0.3995 0.1519 313.99;
    --royal_purple-950: 0.3325 0.1468 312.76;

    --color-spring-green-50: 0.9863 0.0197 161.32;
    --color-spring-green-100: 0.961 0.0584 160.25;
    --color-spring-green-200: 0.9457 0.0836 159.46;
    --color-spring-green-300: 0.8993 0.1592 156.26;
    --color-spring-green-400: 0.8526 0.2052 152.72;
    --color-spring-green-500: 0.774 0.2123 149.8;
    --color-spring-green-600: 0.7001 0.1953 149.31;
    --color-spring-green-700: 0.5558 0.1484 150.53;
    --color-spring-green-800: 0.4596 0.1171 151.62;
    --color-spring-green-900: 0.4361 0.1072 152.35;
    --color-spring-green-950: 0.2813 0.0733 152.45;

    --color-aquamarine-50: 0.9834 0.0227 175.97;
    --color-aquamarine-100: 0.9503 0.0714 174.24;
    --color-aquamarine-200: 0.9237 0.1144 172.18;
    --color-aquamarine-300: 0.8934 0.147 169.71;
    --color-aquamarine-400: 0.8164 0.1396 169.21;
    --color-aquamarine-500: 0.7892 0.1712 162.75;
    --color-aquamarine-600: 0.6769 0.1462 163.06;
    --color-aquamarine-700: 0.5746 0.1234 163.47;
    --color-aquamarine-800: 0.4832 0.103 164.01;
    --color-aquamarine-900: 0.4199 0.0888 164.56;
    --color-aquamarine-950: 0.2849 0.0585 166.79;

    --color-turquoise-blue-50: 0.9924 0.0107 196.98;
    --color-turquoise-blue-100: 0.9615 0.05 198.96;
    --color-turquoise-blue-200: 0.9321 0.0766 200.1;
    --color-turquoise-blue-300: 0.8844 0.1143 200;
    --color-turquoise-blue-400: 0.8159 0.1224 203.93;
    --color-turquoise-blue-500: 0.7533 0.1285 206.15;
    --color-turquoise-blue-600: 0.7139 0.1222 208.4;
    --color-turquoise-blue-700: 0.5713 0.0966 209.85;
    --color-turquoise-blue-800: 0.4912 0.0811 213.2;
    --color-turquoise-blue-900: 0.4452 0.0744 217.43;
    --color-turquoise-blue-950: 0.3208 0.058 228.22;

    --color-picton-blue-50: 0.9831 0.0086 244.2;
    --color-picton-blue-100: 0.9587 0.0166 244.3;
    --color-picton-blue-200: 0.912 0.0403 240.91;
    --color-picton-blue-300: 0.8044 0.0948 238.73;
    --color-picton-blue-400: 0.7047 0.1441 242.48;
    --color-picton-blue-500: 0.62 0.1574 247.3;
    --color-picton-blue-600: 0.531 0.1425 249.24;
    --color-picton-blue-700: 0.4649 0.1264 250.19;
    --color-picton-blue-800: 0.4068 0.1069 250.44;
    --color-picton-blue-900: 0.3566 0.0921 252.15;
    --color-picton-blue-950: 0.27 0.0654 253.87;

    --color-royal-blue-50: 0.9711 0.0138 256.71;
    --color-royal-blue-100: 0.945 0.0213 256.73;
    --color-royal-blue-200: 0.8906 0.0417 256.78;
    --color-royal-blue-300: 0.7881 0.0914 256.86;
    --color-royal-blue-400: 0.6609 0.1603 259.49;
    --color-royal-blue-500: 0.5791 0.1912 263.07;
    --color-royal-blue-600: 0.5284 0.2124 264.68;
    --color-royal-blue-700: 0.4673 0.2144 265.76;
    --color-royal-blue-800: 0.4181 0.1861 267.29;
    --color-royal-blue-900: 0.3608 0.1459 268.95;
    --color-royal-blue-950: 0.2691 0.0927 272.83;

    --color-outrageous-orange-50: 0.9836 0.0076 44.9;
    --color-outrageous-orange-100: 0.9448 0.026 48.43;
    --color-outrageous-orange-200: 0.8869 0.0626 57.34;
    --color-outrageous-orange-300: 0.7962 0.1148 50.54;
    --color-outrageous-orange-400: 0.6966 0.1746 42.01;
    --color-outrageous-orange-500: 0.6434 0.2005 36.31;
    --color-outrageous-orange-600: 0.6072 0.2169 32.58;
    --color-outrageous-orange-700: 0.5125 0.1816 30.44;
    --color-outrageous-orange-800: 0.4279 0.1486 28.32;
    --color-outrageous-orange-900: 0.3758 0.1274 26.59;
    --color-outrageous-orange-950: 0.2542 0.0791 27.29;

    --color-sea-buckthorn-50: 0.9832 0.0123 78.27;
    --color-sea-buckthorn-100: 0.9456 0.0404 79.78;
    --color-sea-buckthorn-200: 0.8847 0.0995 83.95;
    --color-sea-buckthorn-300: 0.822 0.1371 78.32;
    --color-sea-buckthorn-400: 0.7877 0.1465 71.23;
    --color-sea-buckthorn-500: 0.7005 0.1707 53.39;
    --color-sea-buckthorn-600: 0.6085 0.1748 43.3;
    --color-sea-buckthorn-700: 0.5134 0.1504 40.13;
    --color-sea-buckthorn-800: 0.4475 0.1347 36.62;
    --color-sea-buckthorn-900: 0.3882 0.11 35.11;
    --color-sea-buckthorn-950: 0.2656 0.0675 40.91;

}

.dark {
/_ --background: 0.25 0.0343 179.41; _/
--background: 0.1304 0.024 177.94;
--foreground: 0.9838 0.0035 247.86;
--card: 0.25 0.0343 179.41;
--card-foreground: 0.9838 0.0035 247.86;
--popover: 0.3504 0.0428 179.08;
--popover-foreground: 0.9838 0.0035 247.86;
--primary: 0.9838 0.0035 247.86;
--primary-foreground: 0.25 0.0343 179.41;
--secondary: 0.3504 0.0428 179.08;
--secondary-foreground: 0.9838 0.0035 247.86;
--muted: 0.3504 0.0428 179.08;
--muted-foreground: 0.7107 0.0351 256.79;
--accent: 0.3504 0.0428 179.08;
--accent-foreground: 0.9838 0.0035 247.86;
--destructive: 0.4279 0.1486 28.32;
--destructive-foreground: 0.9838 0.0035 247.86;
--border: 0.3504 0.0428 179.08;
--input: 0.3504 0.0428 179.08;
--outline: 0.8688 0.0198 252.85;
--ring: 0.8688 0.0198 252.85;
--chart-1: 0.5292 0.1931 262.13;
--chart-2: 0.6983 0.1337 165.46;
--chart-3: 0.7232 0.15 60.63;
--chart-4: 0.6192 0.2037 312.73;
--chart-5: 0.6123 0.2093 6.39;
/\*
--background: #1c1b1a;
--foreground: #f8faff;
--card: #1c1b1a;
--card-foreground: #f8faff;
--popover: #1c1b1a;
--popover-foreground: #f8faff;
--primary: #f8faff;
--primary-foreground: #0f0e17;
--secondary: #2e3740;
--secondary-foreground: #f8faff;
--muted: #2e3740;
--muted-foreground: #a4c2d3;
--accent: #2e3740;
--accent-foreground: #f8faff;
--destructive: #993f3f;
--destructive-foreground: #f8faff;
--border: #2e3740;
--input: #2e3740;
--ring: #c0c5d9;
--chart-1: #4c66b6;
--chart-2: #2a6f69;
--chart-3: #e69928;
--chart-4: #914ce6;
--chart-5: #c63993;

    blood_shot_eyes: {
      50: "#FEF0E1"
      100: "#FEE5D2"
      200: "#FEDBC6"
      300: "#FECAB4"
      400: "#DA9783"
      500: "#B6695A"
      600: "#934239"
      700: "#863130"
      800: "#792522"
      900: "#701512"
      950: "#500800"
      DEFAULT: "#B6695A"
      foreground: "#000000"
    },
    teal_background: {
      50: "#eafff0"
      100: "#CCFFDC"
      200: "#99FFC4"
      300: "#66FFB6"
      400: "#40FFB6"
      500: "#01ffb7"
      600: "#00DBB2"
      700: "#00B7A7"
      800: "#009293"
      900: "#006D7A"
      950: "#042f3e"
      DEFAULT: "#01ffb7"
      foreground: "#000000"
    },
    skin: {
      50: "#ECF1FE"
      100: "#D9E3FD"
      200: "#B4C4F7"
      300: "#9baef2"
      400: "#8499e1"
      500: "#7183D5"
      600: "#5f68bf"
      700: "#4E5EAE"
      800: "#313F8C"
      900: "#1D2874"
      950: "#101048"
    },
    gold: {
      50: "#FDF9ED"
      100: "#FBF4DF"
      200: "#F6E7BB"
      300: "#F0D88E"
      400: "#EAC861"
      500: "#E3B52B"
      600: "#CFA21B"
      700: "#B68E18"
      800: "#997814"
      900: "#6C550E"
      950: "#4D3C0A"
    },

    eva_danger: {
      50: "#ffefea"
      100: "#FFE4E6"
      200: "#FFC9D4"
      300: "#FFAFC6"
      400: "#FF9BC2"
      500: "#FF7ABC"
      600: "#DB59A6"
      700: "#B73D92"
      800: "#93267D"
      900: "#7A1770"
      950: "#4F106a"
    },


    adobe color wheel:
    #03ff0c #03ff62 #02ffb7 #03f2ff #03a2ff
    #58ffd0

    #9be5f2 #9bc9f2 #9baef1 #a49bf2 #c19bf2
    #c8d1f2

    #fab6c6 #fabeb6 #fbc9b6 #fad5b6 #fae0b6
    #facbb8



    image color picker
    #f9c8b5 #4e4d56 #02ffb7 #308c75 #CDD7F3

\*/

    /* CSS HEX */
    --aquamarine: #02ffb7;
    --sage: #308c75;
    --lavender-web: #cdd8f4;
    --vista-blue: #9baef1;
    --apricot: #fbc9b6;
    --rust: #934239;
    --davys-gray: #4b494f;
    --outer_space: #4a5c60;

    --aqua_green: #02ffb7;
    --teal_green: #308c75;
    --periwinkle: #cdd8f4;
    --cornflower-blue: #9baef1;
    --peach-blush: #fbc9b6;
    --rust: #934239;
    --davys-gray: #4b494f;
    --outer_space: #4a5c60;

    /*

#FBC9B6
#02FFB7
#25847B
#639198
#25212E
#c7f0bd
#00ffa2

#02FFB7
#2676A2
#535A6D
#57616F
#1A151A

#F6EDF3
#75C1D1
#02FFB7
#86785E
#2F3A4D

#aaffda
#00ff8f
#009f59

#aaff92
#02ffb7
#029f80
\*/

    /* CSS HSL */
    --aquamarine: hsla(163, 100%, 50%, 1);
    --sage: hsla(165, 49%, 37%, 1);
    --lavender-web: hsla(223, 64%, 88%, 1);
    --vista-blue: hsla(227, 75%, 78%, 1);
    --apricot: hsla(17, 90%, 85%, 1);
    --rust: hsla() --davys-gray: hsla(260, 4%, 30%, 1);
    --outer_space: hsla(191, 13%, 33%, 1);

    /*

https://uicolors.app/create
https://www.tints.dev
50: "#e7fff7",
100: "#c6ffea",
200: "#92ffdb",
300: "#4dffcc",
-400: "#02ffb7",
500: "#00e8a4",
600: "#00be87",
700: "#009871",
800: "#00785b",
900: "#00624c",
950: "#00382c",
50: "#F0FFFB",
100: "#E0FFF6",
200: "#B3FFE9",
300: "#80FFDB",
400: "#02FFB7",
500: "#00EBA8",
600: "#00D69A",
700: "#00B884",
800: "#009E71",
900: "#007050",
950: "#00523A",

    50: "#f3faf8",
    100: "#d5f2e8",
    200: "#abe4d1",
    300: "#79cfb5",
    400: "#4eb399",
    -500: "#308c75",
    600: "#277a66",
    700: "#236254",
    800: "#204f45",
    900: "#1f423b",
    950: "#0c2722",
      50: "#ECF8F5",
      100: "#D9F2EC",
      200: "#ABE2D5",
      300: "#73CFB8",
      400: "#3FB698",
      500: "#308C75",
      600: "#2C816C",
      700: "#266E5C",
      800: "#1F5B4C",
      900: "#164136",
      950: "#0E2A23",

    50: "#f1f5fc",
    100: "#e6ecfa",
    -200: "#CDD8F4",
    300: "#b4c3ed",
    400: "#95a2e4",
    500: "#7d85d9",
    600: "#6164ca",
    700: "#5152b1",
    800: "#434490",
    900: "#3c3f73",
    950: "#232443",
      50: "#F2F5FC",
      100: "#E6EBF9",
      200: "#CDD8F4",
      300: "#BCCBF0",
      400: "#ABBEED",
      500: "#97AEE8",
      600: "#829DE3",
      700: "#698ADE",
      800: "#436CD6",
      900: "#274DB0",
      950: "#1A3475",

    50: "#eff5fe",
    100: "#e2ebfc",
    200: "#cbdbfa",
    300: "#acc1f5",
    -400: "#9baef1",
    500: "#6e80e6",
    600: "#525bd9",
    700: "#4349bf",
    800: "#393f9a",
    900: "#353c7a",
    950: "#1f2247",
      50: "#F6F8FE",
      100: "#E9EDFC",
      200: "#D2DBF9",
      300: "#BCC8F6",
      400: "#9BAEF1",
      500: "#869DEE",
      600: "#748EEC",
      700: "#5A78E8",
      800: "#3A5FE3",
      900: "#1A3CB7",
      950: "#132D8B",

    50: "#fef5f2",
    100: "#fdeae3",
    200: "#fdd9cb",
    -300: "#fbc9b6",
    400: "#f59874",
    500: "#eb7548",
    600: "#d85a2a",
    700: "#b6491f",
    800: "#963f1e",
    900: "#7d391f",
    950: "#441b0b",
      50: "#FEF8F5",
      100: "#FEF1EC",
      200: "#FCDCCF",
      300: "#FBC9B6",
      400: "#F9B599",
      500: "#F8A381",
      600: "#F6875B",
      700: "#F3632A",
      800: "#DA460C",
      900: "#9B3208",
      950: "#742506",

    50: "#fcf5f4",
    100: "#f8eae8",
    200: "#f4d7d4",
    300: "#ebbbb6",
    400: "#dd948c",
    500: "#cd7066",
    600: "#b7564b",
    -700: "#934239",
    800: "#803c34",
    900: "#6b3731",
    950: "#391916",
      50: "#FCF8F8",
      100: "#F8EEED",
      200: "#EFD9D7",
      300: "#E8C8C4",
      400: "#DEB0AA",
      500: "#D19189",
      600: "#C26B61",
      700: "#934239",
      800: "#79362F",
      900: "#51241F",
      950: "#3E1C18",

    50: "#f7f7f8",
    100: "#efeef0",
    200: "#dbdadd",
    300: "#bcbabf",
    400: "#96949c",
    500: "#7a7780",
    600: "#636069",
    700: "#514f55",
    -800: "#4b494f",
    900: "#3c3b3f",
    950: "#28272a",
      50: "#F7F7F8",
      100: "#F2F2F3",
      200: "#E3E2E4",
      300: "#D3D2D5",
      400: "#C1BFC4",
      500: "#AFADB3",
      600: "#98959D",
      700: "#76737D",
      800: "#4B494F",
      900: "#302F32",
      950: "#28272A",

    50: "#f4f7f7",
    100: "#e3eaea",
    200: "#cad6d7",
    300: "#a5babb",
    400: "#789598",
    500: "#5d797d",
    600: "#50666a",
    -700: "#4a5c60",
    800: "#3d4a4d",
    900: "#363f43",
    950: "#21282b",
      50: "#F6F8F8",
      100: "#EEF1F2",
      200: "#DAE1E2",
      300: "#C5D0D3",
      400: "#AEBDC1",
      500: "#92A6AB",
      600: "#6D878D",
      700: "#4A5C60",
      800: "#3E4D51",
      900: "#283234",
      950: "#21292B",

      '50': '#f4f7f7',
        '100': '#e3eaea',
        '200': '#c9d7d8',
        '300': '#a4babc',
        '400': '#779699',
        '500': '#5c7b7e',
        '600': '#4f676b',
        '700': '#44565a',
        '800': '#3d4a4d',
        '900': '#364043',
        '950': '#21292b',

      --fall_green-50: #f8f8ee;
    --fall_green-100: #eeefd2;
    --fall_green-200: #e1e2ae;
    --fall_green-300: #cecc76;
    --fall_green-400: #bfb850;
    --fall_green-500: #afa443;
    --fall_green-600: #978537;
    --fall_green-700: #79652f;
    --fall_green-800: #66532d;
    --fall_green-900: #58462b;
    --fall_green-950: #322616;

    --mustard-50: #fffbeb;
    --mustard-100: #fff5c6;
    --mustard-200: #ffe988;
    --mustard-300: #ffdb57;
    --mustard-400: #ffc520;
    --mustard-500: #f9a407;
    --mustard-600: #dd7b02;
    --mustard-700: #b75706;
    --mustard-800: #94420c;
    --mustard-900: #7a370d;
    --mustard-950: #461b02;

    --blue_chill-50: #eefffc;
    --blue_chill-100: #c5fffa;
    --blue_chill-200: #8bfff6;
    --blue_chill-300: #4afef1;
    --blue_chill-400: #15ece3;
    --blue_chill-500: #00d0cb;
    --blue_chill-600: #00a8a6;
    --blue_chill-700: #009293;
    --blue_chill-800: #066769;
    --blue_chill-900: #0a5657;
    --blue_chill-950: #003235;

    --hopbush-50: #fcf3f9;
    --hopbush-100: #fae9f5;
    --hopbush-200: #f6d4ea;
    --hopbush-300: #f1b0d9;
    --hopbush-400: #e77fbf;
    --hopbush-500: #db59a6;
    --hopbush-600: #c83a87;
    --hopbush-700: #ad296d;
    --hopbush-800: #8f255a;
    --hopbush-900: #78234d;
    --hopbush-950: #480f2c;

    --cotton_candy-50: #fff1f4;
    --cotton_candy-100: #ffe3ea;
    --cotton_candy-200: #ffccda;
    --cotton_candy-300: #ffafc6;
    --cotton_candy-400: #fe6e9b;
    --cotton_candy-500: #f83b7a;
    --cotton_candy-600: #e51967;
    --cotton_candy-700: #c20e58;
    --cotton_candy-800: #a20f50;
    --cotton_candy-900: #8b104a;
    --cotton_candy-950: #4e0324;

    --royal_purple-50: #fbf6fe;
    --royal_purple-100: #f6eafd;
    --royal_purple-200: #eed8fc;
    --royal_purple-300: #e1baf8;
    --royal_purple-400: #ce8df3;
    --royal_purple-500: #bb61eb;
    --royal_purple-600: #a841dc;
    --royal_purple-700: #922fc1;
    --royal_purple-800: #7a2b9e;
    --royal_purple-900: #64247f;
    --royal_purple-950: #4f106a;

// Complementary Colors according to canvas
'mandy': {
'50: #fef2f3;
'100: #fde6e7;
'200: #fbd0d5;
'300: #f7aab2;
'400: #f27a8a;
'500: #ea546c;
'600: #d5294d;
'700: #b31d3f;
'800: #961b3c;
'900: #811a39;
'950: #48091a;
},

'aquamarine': {
'50: #e7fff7;
'100: #c6ffea;
'200: #92ffdb;
'300: #4dffcc;
'400: #02ffb7;
'500: #00e8a4;
'600: #00be87;
'700: #009871;
'800: #00785b;
'900: #00624c;
'950: #00382c;
},

'red-ribbon': {
'50: #ffeff1;
'100: #ffe0e5;
'200: #ffc6d2;
'300: #ff97ac;
'400: #ff5d81;
'500: #ff245a;
'600: #fd0048; --> complementary to #02ffb7
'700: #d7003d;
'800: #b4003c;
'900: #99023a;
'950: #57001a;
},
'red-ribbon': {
'50: #ffeff1;
'100: #ffe0e5;
'200: #ffc6d2;
'300: #ff97ac;
'400: #ff5d81;
'500: #ff245a;
'600: #ff024a;--> complementary to #02ffb7
'700: #d7003d;
'800: #b4003c;
'900: #99023a;
'950: #57001a;
},

'caribbean-green': {
'50: #eafff6;
'100: #cdfee7;
'200: #a0fad5;
'300: #63f2bf;
'400: #25e2a5;
'500: #00ce93; --> monocromatic
'600: #00a475;
'700: #008362;
'800: #00674f;
'900: #005542;
'950: #003026;
},

'malibu': {
'50: #effbff;
'100: #def5ff;
'200: #b6eeff;
'300: #75e3ff;
'400: #2cd6ff;
'500: #02c9ff; --> analogus
'600: #009dd4;
'700: #007dab;
'800: #00698d;
'900: #065774;
'950: #04374d;
},
'green': {
'50: #e4ffe7;
'100: #c4ffcb;
'200: #90ffa0;
'300: #50ff6f;
'400: #02ff38; --> analogus
'500: #00e637;
'600: #00b831;
'700: #008b25;
'800: #076d23;
'900: #0b5c23;
'950: #003411;
},

'purple-pizzazz': {
'50: #fff0fd',
'100: #ffe3fd',
'200: #ffc6fc',
'300: #ff98f8',
'400: #ff58ef',
'500: #ff27e2',
'600: #ff02c8', --> split (figma)
'700: #df00a2',
'800: #b80086',
'900: #980371',
'950: #5f0041',
},
'scarlet': {
'50: #fff5ec',
'100: #ffe7d3',
'200: #ffcba5',
'300: #ffa76d',
'400: #ff7732',
'500: #ff510a',
'600: #ff3802', --> split (figma)
'700: #cc2302',
'800: #a11d0b',
'900: #821b0c',
'950: #460904',
},

'electric-violet': {
'50: #fcf3ff;
'100: #f8e3ff;
'200: #f2cdff;
'300: #e8a5ff;
'400: #db6cff;
'500: #cd35ff;
'600: #c00fff;
'700: #b702ff; --> triadic
'800: #9006c3;
'900: #76079c;
'950: #520076;
},
'selective-yellow': {
'50: #fffeea;
'100: #fff9c5;
'200: #fff485;
'300: #ffe746;
'400: #ffd71b;
'500: #ffb702; --> triadic
'600: #e28c00;
'700: #bb6202;
'800: #984c08;
'900: #7c3e0b;
'950: #481f00;
},

'blue': {
'50: #f0f0ff;
'100: #e5e4ff;
'200: #cecdff;
'300: #aba6ff;
'400: #8273ff;
'500: #5b3bff;
'600: #4914ff;
'700: #3802ff; --> tetradic
'800: #2e01d6;
'900: #2803af;
'950: #140077;
},
'red-ribbon': {
'50: #ffeff1;
'100: #ffe0e5;
'200: #ffc6d2;
'300: #ff97ac;
'400: #ff5d81;
'500: #ff245a;
'600: #ff024a;--> tetradic
'700: #d7003d;
'800: #b4003c;
'900: #99023a;
'950: #57001a;
},
'electric-lime': {
'50: #fcffe4;
'100: #f8ffc4;
'200: #efff90;
'300: #dfff50;
'400: #c8ff02; --> tetradic
'500: #aee600;
'600: #87b800;
'700: #658b00;
'800: #506d07;
'900: #445c0b;
'950: #223400;
},

'sisal': {
'50: #f8f7f4;
'100: #efede5;
'200: #d7d0c0;
'300: #c8bea9;
'400: #b1a086;
'500: #a18b6e;
'600: #947b62;
'700: #7c6552;
'800: #665346;
'900: #53453b;
'950: #2c231e;
},

'parchment': {
'50: #f9f6ed;
'100: #f0e9d1;
'200: #e2d3a6;
'300: #d2b572;
'400: #c49a4b;
'500: #b4863e;
'600: #9b6a33;
'700: #7c502c;
'800: #69422a;
'900: #5a3929;
'950: #341d14;
},

// uicolors.app predefined
'wewak': {
'50: #fdf3f4',
'100: #fbe8eb',
'200: #f6d5da',
'300: #ea9daa',
'400: #e58799',
'500: #d75c77',
'600: #c13d60',
'700: #a22e4f',
'800: #882947',
'900: #752642',
'950: #411020',
},
'contessa': {
'50: #fbf6f5;
'100: #f6ecea;
'200: #f0dcd8;
'300: #e4c3bd;
'400: #d3a096;
'500: #ba7264;
'600: #aa6558;
'700: #8e5347;
'800: #77463d;
'900: #643f38;
'950: #351e1a;
'jade': {
'50: #effef7;
'100: #dafeef;
'200: #b8fadd;
'300: #81f4c3;
'400: #43e5a0;
'500: #1acd81;
'600: #0fa968;
'700: #108554;
'800: #126945;
'900: #11563a;
'950: #03301f;
},
'mantis': {
'50: #f6faf3;
'100: #e9f5e3;
'200: #d3eac8;
'300: #afd89d;
'400: #82bd69;
'500: #61a146;
'600: #4c8435;
'700: #3d692c;
'800: #345427;
'900: #2b4522;
'950: #13250e;
},
'waikawa-gray': {
'50: #f2f7fb;
'100: #e7f0f8;
'200: #d3e2f2;
'300: #b9cfe8;
'400: #9cb6dd;
'500: #839dd1;
'600: #6a7fc1;
'700: #6374ae;
'800: #4a5989;
'900: #414e6e;
'950: #262c40;
},

#403D3E #524F59 #A0B4F2 #CEDAF2 #05F29B #F2C1AE

#02ffb7 #fecab4 #9baef2 #2ea1f7 #e6b77d

#0460D9 #023859 #049DD9 #0BBF9E #D99B66 #D9A362
#3B82BF #4193A6 #167347 #4ED998 #3DF28B #BF8D50 #D9AA71
#635FD9 #182259 #148DD9 #04BFAD #F28F38

#3DF28B #3DF2C9 #3DDFF2 #3DA6F2 #3D6CF2 #F2A93D #F26A3D #F2543D

#3DF281 #3DF2BE #3DE9F2 #3DB0F2 #3D76F2 #3D3DF2 #F2A13D #F2653D

#38F27E #38F2BD #38E8F2 #38AEF2 #3873F2 #6478f0 #3838F2 #6478f0 #F26238

'spring-green': {
'50': '#eefff3',
'100': '#d8ffe6',
'200': '#b3ffcf',
'300': '#78fdaa',
'400': '#38f27e', DEFAULT
'500': '#0cdb5a',
'600': '#03b647',
'700': '#078e3b',
'800': '#0b7032',
'900': '#0c5b2c',
'950': '#003416',
},
--color-spring-green-50: #eefff3;
--color-spring-green-100: #d8ffe6;
--color-spring-green-200: #b3ffcf;
--color-spring-green-300: #78fdaa;
--color-spring-green-400: #38f27e;
--color-spring-green-500: #0cdb5a;
--color-spring-green-600: #03b647;
--color-spring-green-700: #078e3b;
--color-spring-green-800: #0b7032;
--color-spring-green-900: #0c5b2c;
--color-spring-green-950: #003416;

'aquamarine': {
'50': '#e9fff7',
'100': '#caffe9',
'200': '#99ffd9',
'300': '#58fdc9',
'400': '#38f2bd', DEFAULT
'500': '#00d89c',
'600': '#00b081',
'700': '#008d6b',
'800': '#006f56',
'900': '#005b48',
'950': '#00342a',
},
--color-aquamarine-50: #e9fff7;
--color-aquamarine-100: #caffe9;
--color-aquamarine-200: #99ffd9;
--color-aquamarine-300: #58fdc9;
--color-aquamarine-400: #38f2bd;
--color-aquamarine-500: #00d89c;
--color-aquamarine-600: #00b081;
--color-aquamarine-700: #008d6b;
--color-aquamarine-800: #006f56;
--color-aquamarine-900: #005b48;
--color-aquamarine-950: #00342a;

'turquoise-blue': {
'50': '#ecffff',
'100': '#cefeff',
'200': '#a4fbfd',
'300': '#65f5fb',
'400': '#38e8f2', DEFAULT
'500': '#04c9d6',
'600': '#06a0b4',
'700': '#0c8092',
'800': '#146776',
'900': '#155464',
'950': '#073845',
},
--color-turquoise-blue-50: #ecffff;
--color-turquoise-blue-100: #cefeff;
--color-turquoise-blue-200: #a4fbfd;
--color-turquoise-blue-300: #65f5fb;
--color-turquoise-blue-400: #38e8f2;
--color-turquoise-blue-500: #04c9d6;
--color-turquoise-blue-600: #06a0b4;
--color-turquoise-blue-700: #0c8092;
--color-turquoise-blue-800: #146776;
--color-turquoise-blue-900: #155464;
--color-turquoise-blue-950: #073845;

'picton-blue': {
'50': '#f0f8ff',
'100': '#e1f0fd',
'200': '#bce1fb',
'300': '#81cbf8',
'400': '#38aef2', DEFAULT
'500': '#1497e3',
'600': '#0877c1',
'700': '#085f9c',
'800': '#0b5181',
'900': '#0f446b',
'950': '#0a2b47',
},
--color-picton-blue-50: #f0f8ff;
--color-picton-blue-100: #e1f0fd;
--color-picton-blue-200: #bce1fb;
--color-picton-blue-300: #81cbf8;
--color-picton-blue-400: #38aef2;
--color-picton-blue-500: #1497e3;
--color-picton-blue-600: #0877c1;
--color-picton-blue-700: #085f9c;
--color-picton-blue-800: #0b5181;
--color-picton-blue-900: #0f446b;
--color-picton-blue-950: #0a2b47;

'royal-blue': {
'50': '#eff5ff',
'100': '#dce8fd',
'200': '#c0d7fd',
'300': '#95bffb',
'400': '#639cf7',
'500': '#3873f2', DEFAULT
'600': '#2958e7',
'700': '#2145d4',
'800': '#2138ac',
'900': '#203588',
'950': '#182253',
},
'portage': {
'50': '#eef4ff',
'100': '#e0ebff',
'200': '#c7d9fe',
'300': '#a6bffb',
'400': '#839cf7',
'500': '#6478f0',
'600': '#4751e4',
'700': '#3940c9',
'800': '#3138a2',
'900': '#2f3680',
'950': '#1b1e4b',
},

--color-royal-blue-50: #eff5ff;
--color-royal-blue-100: #dce8fd;
--color-royal-blue-200: #c0d7fd;
--color-royal-blue-300: #95bffb;
--color-royal-blue-400: #639cf7;
--color-royal-blue-500: #3873f2;
--color-royal-blue-600: #2958e7;
--color-royal-blue-700: #2145d4;
--color-royal-blue-800: #2138ac;
--color-royal-blue-900: #203588;
--color-royal-blue-950: #182253;

'outrageous-orange': {
'50': '#fef3ee',
'100': '#fde4d7',
'200': '#fac6ae',
'300': '#f79e7a',
'400': '#f26238', DEFAULT
'500': '#ef4720',
'600': '#e02e16',
'700': '#ba1f14',
'800': '#941b18',
'900': '#771917',
'950': '#400a0b',
},
--color-outrageous-orange-50: #fef3ee;
--color-outrageous-orange-100: #fde4d7;
--color-outrageous-orange-200: #fac6ae;
--color-outrageous-orange-300: #f79e7a;
--color-outrageous-orange-400: #f26238;
--color-outrageous-orange-500: #ef4720;
--color-outrageous-orange-600: #e02e16;
--color-outrageous-orange-700: #ba1f14;
--color-outrageous-orange-800: #941b18;
--color-outrageous-orange-900: #771917;
--color-outrageous-orange-950: #400a0b;

'sea-buckthorn': {
'50': '#fef7ec',
'100': '#fbe9ca',
'200': '#f8d18f',
'300': '#f4b455',
'400': '#f2a13d', DEFAULT
'500': '#ea7716',
'600': '#cf5610',
'700': '#ac3a11',
'800': '#8c2d14',
'900': '#732614',
'950': '#421106',
},
--color-sea-buckthorn-50: #fef7ec;
--color-sea-buckthorn-100: #fbe9ca;
--color-sea-buckthorn-200: #f8d18f;
--color-sea-buckthorn-300: #f4b455;
--color-sea-buckthorn-400: #f2a13d;
--color-sea-buckthorn-500: #ea7716;
--color-sea-buckthorn-600: #cf5610;
--color-sea-buckthorn-700: #ac3a11;
--color-sea-buckthorn-800: #8c2d14;
--color-sea-buckthorn-900: #732614;
--color-sea-buckthorn-950: #421106;

\*/
}
}

@layer base {

- {
  @apply border-border;
  }
  body {
  @apply bg-background text-foreground;
  }

.scalloped {
--mask: linear-gradient(#000 0 0) 50% / calc(100% - 22.2px)
calc(100% - 22.2px) no-repeat,
radial-gradient(farthest-side, #000 98%, #0000) 0 0/24px 24px round;
-webkit-mask: var(--mask);
mask: var(--mask);
background-color: white; /_ or any other color _/
/_ box-shadow: 0 0 0 2px white inset; _/
}
.nobs-t {
--mask: linear-gradient(to bottom, #0000 30px, #000 0),
radial-gradient(farthest-side, #000 98%, #0000) 0 0/24px 24px round;
-webkit-mask: var(--mask);
mask: var(--mask);
background-color: white; /_ or any other color _/
/_ box-shadow: 0 0 0 2px white inset; _/
}
}
